// hooks.ts

import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public'
import { createSupabaseServerClient } from '@supabase/auth-helpers-sveltekit'
import type { Handle } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import type { Database } from './database.types';

function check_lang(lang: string | undefined) {
	const languages = ['en', 'tr','de'];
	if (lang && !languages.includes(lang)) {
		console.log("redirecting to en")
		redirect(301, '/en');
	}
	return lang;
}

export const handle: Handle = async ({ event, resolve }) => {
	// supbase stuf ----------------
	event.locals.supabase = createSupabaseServerClient<Database>({
		supabaseUrl: PUBLIC_SUPABASE_URL,
		supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
		event,
	  })
	
	  event.locals.getSession = async () => {
		const {
		  data: { session },
		} = await event.locals.supabase.auth.getSession()
		return session
	  }

	// lang stuf
	let lang: string | undefined = event.params.lang;
	// console.log("<-----hooks.ts----------->")
	// console.log("hostName:",event.url.hostname)
	// console.log("lang:",lang)


	lang = check_lang(lang);

	

	return resolve(event, {
		filterSerializedResponseHeaders(name) {
		  return name === 'content-range'
		},
	  })
};
