/*
  # Drop unused tables

  Removes all tables except for products:
  - collection_photos
  - collection_details
  - collections
  - flowers
  - accessory_types
  - plastic_colors

  Also removes the foreign key constraint from products referencing collections.
*/

ALTER TABLE products DROP CONSTRAINT IF EXISTS products_collection_id_fkey;

DROP TABLE IF EXISTS collection_photos;
DROP TABLE IF EXISTS collection_details;
DROP TABLE IF EXISTS collections;
DROP TABLE IF EXISTS flowers;
DROP TABLE IF EXISTS accessory_types;
DROP TABLE IF EXISTS plastic_colors;
