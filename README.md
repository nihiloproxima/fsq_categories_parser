# Foursquare Categories Converter

A Node.js script that converts Foursquare venue categories from their hierarchical structure into two different JSON formats for easier consumption.

## Purpose

This script takes the Foursquare venue categories hierarchy and transforms it into:
1. A categorized flat structure (`res.json`) - maintains category groupings but flattens the hierarchy
2. A completely flat structure (`flat.json`) - all categories in a single array

## Usage

```bash
node index.js
```

## Output Files

- `res.json`: Contains categories organized by their top-level groups, with all subcategories flattened into arrays
- `flat.json`: Contains all categories in a single flat array, each with their ID and name

## Requirements

- Node.js
- Source categories data in `categories.js`

## Structure

Each category in the output files follows this format:
```json
{
  "id": "category_id",
  "name": "Category Name"
}
```
