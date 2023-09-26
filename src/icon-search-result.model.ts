export interface IconModel {
  icon_id: number;
  tags: string[];
  published_at: Date;
  is_premium: boolean;
  type: number | "vector" | "raster";
  containers: { format: string; download_url: string }[];
  raster_sizes: {
    formats: [
      {
        format: string;
        preview_url: string;
        download_url: string;
      },
    ];
    size: number;
    size_width: number;
    size_height: number;
  }[];
  vector_sizes: {
    formats: {
      format: string;
      download_url: string;
    }[];
    target_sizes: number[][];
    size: number;
    size_width: number;
    size_height: number;
  }[];
  styles: {
    identifier: string;
    name: string;
  }[];
  categories: {
    identifier: string;
    name: string;
  }[];
  is_icon_glyph: boolean;
}

export interface IconSearchResult {
  total_count: number;
  icons: IconModel[];
}
