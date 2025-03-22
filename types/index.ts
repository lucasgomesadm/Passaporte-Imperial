export interface TouristLocation {
  id: string;
  name: string;
  description: string;
  image: string;
  facts: string[];
  isVisited?: boolean;
}

export interface UserProgress {
  visitedLocations: string[];
  totalLocations: number;
} 