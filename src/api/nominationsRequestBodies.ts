/**
 * Generated by @openapi-codegen
 *
 * @version 1.0.0
 */
export type Nomination = {
  /**
   * Must be a valid nominee_id
   */
  nominee_id?: string;
  reason?: string;
  /**
   * One of the following values: very_unfair,unfair,not_sure,fair,very_fair
   */
  process?: string;
};
