/**
 * This is an interface for Item from REST API
 */
export interface IItem {
  id: number;
  name: string;
  formatted_price: string;
  rating_summary: number;
  thumbnail: string;
}
