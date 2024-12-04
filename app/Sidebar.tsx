import React from "react";
import Image from 'next/image';
import type { Highlight } from "react-pdf-highlighter-extended";
import "./style/Sidebar.css";
import { CommentedHighlight } from "./types";

interface SidebarProps {
  highlights: Array<CommentedHighlight>;
  resetHighlights: () => void;
  toggleDocument: () => void;
}

const updateHash = (highlight: Highlight) => {
  document.location.hash = `highlight-${highlight.id}`;
};

// declare const APP_VERSION: string;

const Sidebar = ({
  highlights
}: SidebarProps) => {
  return (
    <div className="sidebar" style={{ width: "25vw", maxWidth: "500px" }}>
      {/* Description section */}

      {/* Highlights list */}
      {highlights && (
        <ul className="sidebar__highlights">
          {highlights.map((highlight, index) => (
            <li
              key={index}
              className="sidebar__highlight"
              onClick={() => {
                updateHash(highlight);
              }}
            >
              <div>
                {/* Highlight comment and text */}
                <strong>{highlight.comment}</strong>
                {highlight.content.text && (
                  <blockquote style={{ marginTop: "0.5rem" }}>
                    {`${highlight.content.text.slice(0, 90).trim()}…`}
                  </blockquote>
                )}

                {/* Highlight image */}
                {highlight.content.image && (
                  <div
                    className="highlight__image__container"
                    style={{ marginTop: "0.5rem" }}
                  >
                    <Image
                      src={highlight.content.image}
                      alt="Screenshot"
                      className="highlight__image"
                      width={500} // specify a width for the image
                      height={300} // specify a height for the image
                      layout="intrinsic" // ensures the image maintains its aspect ratio
                    />
                  </div>
                )}
              </div>

              {/* Highlight page number */}
              <div className="highlight__location">
                Page {highlight.position.boundingRect.pageNumber}
              </div>
            </li>
          ))}
        </ul>
      )}

    </div>
  );
};

export default Sidebar;
