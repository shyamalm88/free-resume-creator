import * as React from "react";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import { Stack } from "@mui/material";

export default function FormSkeleton() {
  return (
    <Box>
      <Stack direction={"column"} gap={2}>
        <Skeleton
          animation="wave"
          variant="rounded"
          height={40}
          width={"100%"}
        />
        <Skeleton
          animation="wave"
          variant="rounded"
          height={20}
          width={"100%"}
        />
        <Skeleton
          animation="wave"
          variant="rounded"
          height={60}
          width={"100%"}
        />
        <Skeleton
          animation="wave"
          variant="rounded"
          height={60}
          width={"100%"}
        />
        <Skeleton
          animation="wave"
          variant="rounded"
          height={60}
          width={"100%"}
        />
        <Skeleton
          animation="wave"
          variant="rounded"
          height={40}
          width={"100%"}
        />
        <Skeleton
          animation="wave"
          variant="rounded"
          height={40}
          width={"100%"}
        />
        <Skeleton
          animation="wave"
          variant="rounded"
          height={40}
          width={"100%"}
        />
        <Skeleton
          animation="wave"
          variant="rounded"
          height={40}
          width={"100%"}
        />
        <Skeleton
          animation="wave"
          variant="rounded"
          height={40}
          width={"100%"}
        />
        <Skeleton
          animation="wave"
          variant="rounded"
          height={40}
          width={"100%"}
        />
        <Skeleton
          animation="wave"
          variant="rounded"
          height={40}
          width={"100%"}
        />
        <Skeleton
          animation="wave"
          variant="rounded"
          height={40}
          width={"100%"}
        />
      </Stack>
    </Box>
  );
}
