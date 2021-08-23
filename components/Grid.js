import DynamicComponent from "./DynamicComponent";
import SbEditable from "storyblok-react";

const Grid = ({ blok }) => (
  <SbEditable content={blok}>
    <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8 ">
      <div className="grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blok.columns.map((nestedBlok) => (
          <div key={nestedBlok._uid} className="flex col-span-1">
            <DynamicComponent blok={nestedBlok} />
          </div>
        ))}
      </div>
    </div>
  </SbEditable>
);

export default Grid;
