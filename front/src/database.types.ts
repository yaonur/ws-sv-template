export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      bungalov: {
        Row: {
          created_at: string
          id: string
          name: string | null
          owner_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          name?: string | null
          owner_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          name?: string | null
          owner_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "bungalov_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      quest: {
        Row: {
          created_at: string
          id: string
          last_name: string | null
          name: string | null
          reservation_id: string | null
          tc: number | null
        }
        Insert: {
          created_at?: string
          id?: string
          last_name?: string | null
          name?: string | null
          reservation_id?: string | null
          tc?: number | null
        }
        Update: {
          created_at?: string
          id?: string
          last_name?: string | null
          name?: string | null
          reservation_id?: string | null
          tc?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "quest_reservation_id_fkey"
            columns: ["reservation_id"]
            isOneToOne: false
            referencedRelation: "reservation"
            referencedColumns: ["id"]
          }
        ]
      }
      reservation: {
        Row: {
          bungalov_id: string | null
          created_at: string
          end_data: string | null
          id: string
          start_date: string | null
        }
        Insert: {
          bungalov_id?: string | null
          created_at?: string
          end_data?: string | null
          id?: string
          start_date?: string | null
        }
        Update: {
          bungalov_id?: string | null
          created_at?: string
          end_data?: string | null
          id?: string
          start_date?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "reservation_bungalov_id_fkey"
            columns: ["bungalov_id"]
            isOneToOne: false
            referencedRelation: "bungalov"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_bungalovs_from_date: {
        Args: {
          start_date: string
        }
        Returns: {
          bungalov_id: number
          bungalov_name: string
          reservation_id: number
          reservation_start_date: string
          reservation_end_date: string
          guest_id: number
          guest_name: string
          guest_last_name: string
        }[]
      }
      get_profile: {
        Args: {
          user_id_p: string
        }
        Returns: {
          user_id: string
          username: string
          name: string
          age: number
          gender: string
          avatar_urls: Json
        }[]
      }
      get_profile_2: {
        Args: {
          user_id_p: string
        }
        Returns: {
          user_id: string
          username: string
          name: string
          age: number
          gender: string
          aura_point: number
          target_aura: number
          avatar_urls: Json
        }[]
      }
      get_profile_with_avatar_urls: {
        Args: {
          user_id_p: string
        }
        Returns: {
          user_id: string
          username: string
          name: string
          age: number
          gender: string
          aura_point: number
          target_aura: number
          avatar_urls: Json
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
