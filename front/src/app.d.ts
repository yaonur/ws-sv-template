// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import { SupabaseClient, Session } from '@supabase/supabase-js'
import {Database as DB} from './database.types.ts'
declare global {
	
	namespace App {
		interface Locals {
			supabase: SupabaseClient
			getSession(): Promise<Session | null>
		}
		interface PageData {
			session: Session | null
		}
		type Bungalov = DB['public']['Tables']['bungalov']['Row'] 
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
		// declare interface Window {
		// 	onSubmit: () => void;
		//   }
	}
	// interface Window {
	// 	innerWidth: number;
	// }
}
export interface Locals {
	supabase: SupabaseClient;
	getSession(): Promise<Session | null>;
}
export {};
