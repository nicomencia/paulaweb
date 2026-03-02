/*
  # Drop products table

  Removes the products table which is no longer needed by the application.

  1. Changes
    - Drops the `products` table and all associated policies/indexes
*/

DROP TABLE IF EXISTS products;
