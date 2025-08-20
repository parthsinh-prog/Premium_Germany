import { Box, SimpleGrid } from "@chakra-ui/react";
import { AnimatedStatCard } from "../AnimatedStatCard/AnimatedStatCard";

interface StatsSectionProps {
  stats: {
    value: string;
    label: string;
  }[];
}

export const StatsSection = ({ stats }: StatsSectionProps) => (
  <Box>
    <SimpleGrid columns={{ base: 1, md: 3 }} gap={10}>
      {stats.map((stat, index) => (
        <AnimatedStatCard key={index} stat={stat} index={index} />
      ))}
    </SimpleGrid>
  </Box>
);
