import Teaser from "./HeroImageOnRight";
import Feature from "./Feature";
import FeaturedPosts from "./FeaturedPosts";
import Grid from "./Grid";
import Placeholder from "./Placeholder";
import PostsList from "./PostsList";
import Page from "./Page";
import BlogPost from "./BlogPost";
import HeroImageOnRight from "./HeroImageOnRight";
import Headline from "./Headline";
import ImageWithTextOnRight from "./ImageWithTextOnRight";
import TextWithImage from "./TextWithImage";
import CallToAction from "./CallToAction";
import ContactForm from "./ContactForm";
import Testimonial from "./Testimonial";
import Prose from "./Prose";

const Components = {
  teaser: Teaser,
  "layout-grid": Grid,
  feature: Feature,
  "featured-posts": FeaturedPosts,
  page: Page,
  post: BlogPost,
  "selected-posts": PostsList,
  "hero-image-on-right": HeroImageOnRight,
  headline: Headline,
  "image-with-text-on-right": ImageWithTextOnRight,
  "text-with-image": TextWithImage,
  "call-to-action": CallToAction,
  "contact-form": ContactForm,
  testimonial: Testimonial,
  prose: Prose,
};

const DynamicComponent = ({ blok }) => {
  if (typeof Components[blok.component] !== "undefined") {
    const Component = Components[blok.component];
    return <Component blok={blok} />;
  }
  return <Placeholder componentName={blok.component} />;
};

export default DynamicComponent;
