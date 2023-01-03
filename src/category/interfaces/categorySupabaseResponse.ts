import { PostgrestError } from "@supabase/supabase-js";

import { Category } from "./category";

export interface CategorySupabaseResponse {
  error: PostgrestError;
  data: Category[];
}
