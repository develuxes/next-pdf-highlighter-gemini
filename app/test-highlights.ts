import { CommentedHighlight } from "./types";

export const testHighlights: Record<string, Array<CommentedHighlight>> = {
  "/sample.pdf": [
    {
      type: "area",
      content: {
        text:"Search for TESTLAMP"
         
      },
      position: {
        boundingRect: {
          x1: 90,
          y1: 315,
          x2: 160,
          y2: 325,
          width: 1019.9999999999999,
          height: 1319.9999999999998,
          pageNumber: 1,
        },
        rects: [],
      },
      comment: "TESTLAMP",
      id: "9850481941481022",
    },
    {
      type: "area",
      content: {
        text:"Search for Shipped on November 16, 2024"
         
      },
      position: {
        boundingRect: {
          x1: 365,
          y1: 230,
          x2: 655,
          y2: 250,
          width: 1019.9999999999999,
          height: 1319.9999999999998,
          pageNumber: 1,
        },
        rects: [],
      },
      comment: "Shipped on November 16, 2024",
      id: "9850481941481023",
    },
   
  ],
};
