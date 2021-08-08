import Teaser from "./HeroImageOnRight";
import Feature from "./Feature";
import FeaturedPosts from "./FeaturedPosts";
import Grid from "./Grid";
import Placeholder from "./Placeholder";
import PostsList from "./PostsList";
import Page from "./Page";
import BlogPost from "./BlogPost";
import Text from "./Text";
import HeroImageOnRight from "./HeroImageOnRight";
import Headline from "./Headline";
import ImageWithTextOnRight from "./ImageWithTextOnRight";
import ImageWithTextOnLeft from "./ImageWithTextOnLeft";
import CallToAction from "./CallToAction";
import ContactForm from "./ContactForm";

const Components = {
  teaser: Teaser,
  grid: Grid,
  feature: Feature,
  "featured-posts": FeaturedPosts,
  page: Page,
  post: BlogPost,
  text: Text,
  "selected-posts": PostsList,
  "hero-image-on-right": HeroImageOnRight,
  headline: Headline,
  "image-with-text-on-right": ImageWithTextOnRight,
  "image-with-text-on-left": ImageWithTextOnLeft,
  "call-to-action": CallToAction,
  "contact-form": ContactForm,
};

const DynamicComponent = ({ blok }) => {
  if (typeof Components[blok.component] !== "undefined") {
    const Component = Components[blok.component];
    return <Component blok={blok} />;
  }
  return <Placeholder componentName={blok.component} />;
};

export default DynamicComponent;
