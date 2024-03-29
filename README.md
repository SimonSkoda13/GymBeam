# Next.js Catalog Application for GymBeam

This Next.js application provides a dynamic and responsive catalog interface, featuring a robust filtering system, optimized image handling, and seamless user feedback for loading states. It's designed to deliver a smooth and efficient shopping or browsing experience.

## Features

- **Dynamic Filtering**: Utilizes context to manage and apply filters for catalog items. Filters include price ranges, multi-select options, and checkbox filters.
- **Optimized Image Handling**: Integrates Next.js's Image component for responsive and optimized image delivery, ensuring fast loading times without sacrificing image quality.

## Getting Started

### Prerequisites

- Node.js
- npm or Yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/SimonSkoda13/GymBeam.git
cd GymBeam
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

Navigate to `http://localhost:3000` in your browser to view the application.

## Usage

This application is designed to showcase catalog items with dynamic filtering. Users can apply various filters to narrow down their search criteria.

### Applying Filters

Filters can be applied through the UI elements provided. The application supports multiple filter types, including:

- **Price Range**: Select a price range to filter items within a specific price bracket.
- **Multi-Select**: Choose multiple options from a given set to apply more specific filters.
- **Checkbox Filters**: Toggle options on or off to refine search results.

## Scaling

- **New Filter interface**: Navigate to lib/models/Filter and create there new interface which extends IFilter interface. At the end add new code of filter to FilterType type
- **New Filter component**: Navigate to src/components/Catalog/Filter and create there new component with "YourNewInterfaceName" props. At the end add new filter to the Filter.tsx as new type of filter directly to code as other filter
- **Add filter to Used filters section**: simply when you run editAppliedFilters function from useFilters add name to the object also.
