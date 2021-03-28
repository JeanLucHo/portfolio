
import { Blog3D } from './composants/Contents/Blog3D';
import { BlogArt } from './composants/Contents/BlogArt';
import { BlogDesign } from './composants/Contents/BlogDesign';
import { BlogIllustrator } from './composants/Contents/BlogIllustrator';
import { BlogJeu } from './composants/Contents/BlogJeu';
import { BlogPhotoshop } from './composants/Contents/BlogPhotoshop';
import { BlogSon } from './composants/Contents/BlogSon';
import { BlogWeb } from './composants/Contents/BlogWeb';
import { ContentAfterEffect } from './composants/Contents/ContentAfterEffect';
import { ContentProfile } from './composants/Contents/ContentProfile';
import { Footer } from './composants/Footer';
import { Nav } from './composants/Nav';
import './Appli.scss';
import { Header } from './composants/Contents/Header';

export default function Appli() {
  return (
    <div className="Appli" style={ {  
      backgroundImage: "url('img/background/Background.png')",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}>
        <Nav/>
        {/* <Header/> */}
        <ContentProfile/>
        <ContentAfterEffect/>
        <BlogPhotoshop/>
        <BlogDesign/>
        <BlogIllustrator/>
        <BlogWeb/>
        <BlogArt/>
        <Blog3D/>
        <BlogJeu/>
        <BlogSon/>
        <Footer/>
    </div>
  );
}
