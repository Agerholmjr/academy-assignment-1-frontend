export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      exercises: {
        Row: {
          category: string
          desc: string
          id: number
          title: string
        }
        Insert: {
          category: string
          desc: string
          id?: number
          title: string
        }
        Update: {
          category?: string
          desc?: string
          id?: number
          title?: string
        }
      }
      fitnessprofile: {
        Row: {
          age: number
          gender: string
          height: number
          id: string
          username: string
          weight: number
        }
        Insert: {
          age: number
          gender: string
          height: number
          id?: string
          username: string
          weight: number
        }
        Update: {
          age?: number
          gender?: string
          height?: number
          id?: string
          username?: string
          weight?: number
        }
      }
      fitnessprofile_role_junction: {
        Row: {
          profile_fk: string
          role_fk: string
        }
        Insert: {
          profile_fk: string
          role_fk: string
        }
        Update: {
          profile_fk?: string
          role_fk?: string
        }
      }
      ios_subscription: {
        Row: {
          auto_renew_product_id: string | null
          expires_date_ms: string
          id: string
          original_transaction_id: string
          product_id: string | null
          will_auto_renew: boolean
        }
        Insert: {
          auto_renew_product_id?: string | null
          expires_date_ms: string
          id?: string
          original_transaction_id: string
          product_id?: string | null
          will_auto_renew: boolean
        }
        Update: {
          auto_renew_product_id?: string | null
          expires_date_ms?: string
          id?: string
          original_transaction_id?: string
          product_id?: string | null
          will_auto_renew?: boolean
        }
      }
      permission: {
        Row: {
          id: string
          name: string
        }
        Insert: {
          id?: string
          name: string
        }
        Update: {
          id?: string
          name?: string
        }
      }
      product_description: {
        Row: {
          product_id: string
        }
        Insert: {
          product_id: string
        }
        Update: {
          product_id?: string
        }
      }
      profile: {
        Row: {
          age: number
          first_name: string
          id: string
          ios_subscription_fk: string | null
          last_name: string
          subscription_active: boolean
        }
        Insert: {
          age: number
          first_name: string
          id?: string
          ios_subscription_fk?: string | null
          last_name: string
          subscription_active?: boolean
        }
        Update: {
          age?: number
          first_name?: string
          id?: string
          ios_subscription_fk?: string | null
          last_name?: string
          subscription_active?: boolean
        }
      }
      profile_role_junction: {
        Row: {
          profile_fk: string
          role_fk: string
        }
        Insert: {
          profile_fk: string
          role_fk: string
        }
        Update: {
          profile_fk?: string
          role_fk?: string
        }
      }
      role: {
        Row: {
          id: string
          name: string
        }
        Insert: {
          id?: string
          name: string
        }
        Update: {
          id?: string
          name?: string
        }
      }
      role_permission_junction: {
        Row: {
          permission_fk: string
          role_fk: string
        }
        Insert: {
          permission_fk: string
          role_fk: string
        }
        Update: {
          permission_fk?: string
          role_fk?: string
        }
      }
      subscription_notification: {
        Row: {
          id: string
          ios_subscription_fk: string | null
          subtype: string | null
          timestamp: string
          type: string
        }
        Insert: {
          id?: string
          ios_subscription_fk?: string | null
          subtype?: string | null
          timestamp: string
          type: string
        }
        Update: {
          id?: string
          ios_subscription_fk?: string | null
          subtype?: string | null
          timestamp?: string
          type?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
