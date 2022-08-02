import { NextPage, GetStaticProps } from "next";
import Template from "../components/Layout/Template";
import Hero from "../components/Content/Hero";
import Slideshow from "../components/Content/Slideshow";

const Home: NextPage = () => {
  // Grab darkmode context

  return (
    <Template title="Johnny Chai - Home">
      <div>
        <Hero title="I craft solid websites with great user experiences." />
        <Slideshow />
        <h1 className="text-4xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci
          sagittis eu volutpat odio facilisis mauris. Blandit cursus risus at
          ultrices mi. Mauris in aliquam sem fringilla ut morbi tincidunt.
          Ultricies mi eget mauris pharetra et ultrices neque ornare. Interdum
          consectetur libero id faucibus nisl tincidunt. Sed faucibus turpis in
          eu mi bibendum. Viverra adipiscing at in tellus integer. Non nisi est
          sit amet facilisis magna etiam. Malesuada pellentesque elit eget
          gravida cum sociis. In metus vulputate eu scelerisque felis imperdiet
          proin fermentum. Vitae semper quis lectus nulla. Mi proin sed libero
          enim sed faucibus turpis in. Facilisi morbi tempus iaculis urna id
          volutpat lacus laoreet. Luctus accumsan tortor posuere ac ut. Velit
          egestas dui id ornare arcu odio ut sem nulla. Egestas erat imperdiet
          sed euismod. In massa tempor nec feugiat nisl pretium fusce id velit.
          Cursus risus at ultrices mi tempus imperdiet nulla malesuada
          pellentesque. Ullamcorper morbi tincidunt ornare massa eget egestas
          purus viverra. Dignissim diam quis enim lobortis scelerisque fermentum
          dui faucibus in. Eu sem integer vitae justo. Vel elit scelerisque
          mauris pellentesque pulvinar pellentesque. Augue neque gravida in
          fermentum et sollicitudin ac orci. Non quam lacus suspendisse faucibus
          interdum posuere lorem ipsum dolor. Sagittis purus sit amet volutpat
          consequat mauris nunc congue. Lacus sed turpis tincidunt id aliquet
          risus. Vel pharetra vel turpis nunc eget. Eget aliquet nibh praesent
          tristique magna sit. Mauris vitae ultricies leo integer malesuada nunc
          vel. Blandit turpis cursus in hac habitasse platea dictumst quisque
          sagittis. Tortor at risus viverra adipiscing at in tellus. Velit
          aliquet sagittis id consectetur. Egestas congue quisque egestas diam.
          Sit amet aliquam id diam maecenas ultricies mi eget. Viverra justo nec
          ultrices dui sapien eget mi. Id diam vel quam elementum pulvinar etiam
          non quam lacus. Praesent semper feugiat nibh sed pulvinar proin. Eget
          duis at tellus at. Dictum non consectetur a erat nam at. Ac turpis
          egestas integer eget aliquet nibh praesent. Cursus in hac habitasse
          platea dictumst quisque sagittis. Sed vulputate mi sit amet mauris
          commodo. Fusce id velit ut tortor pretium viverra. Odio pellentesque
          diam volutpat commodo. Diam volutpat commodo sed egestas egestas. At
          imperdiet dui accumsan sit amet nulla facilisi. In egestas erat
          imperdiet sed euismod nisi porta. Non arcu risus quis varius quam
          quisque id diam. Mi tempus imperdiet nulla malesuada pellentesque elit
          eget. Erat imperdiet sed euismod nisi porta. Eget magna fermentum
          iaculis eu non diam phasellus vestibulum. At lectus urna duis
          convallis convallis tellus id. Arcu non odio euismod lacinia at quis
          risus. Varius sit amet mattis vulputate enim. Ornare arcu odio ut sem
          nulla pharetra diam. Ac feugiat sed lectus vestibulum mattis. Facilisi
          morbi tempus iaculis urna id volutpat lacus laoreet non. Cras pulvinar
          mattis nunc sed blandit libero. In hac habitasse platea dictumst
          vestibulum rhoncus est pellentesque. Feugiat vivamus at augue eget
          arcu dictum. Odio ut sem nulla pharetra. Purus sit amet volutpat
          consequat mauris nunc. Magnis dis parturient montes nascetur
          ridiculus. Nulla pharetra diam sit amet nisl suscipit adipiscing.
          Vitae suscipit tellus mauris a diam maecenas sed. Dolor purus non enim
          praesent elementum facilisis. Sit amet dictum sit amet justo. Molestie
          ac feugiat sed lectus vestibulum mattis. Eleifend quam adipiscing
          vitae proin sagittis. Diam donec adipiscing tristique risus nec
          feugiat in fermentum. Pellentesque elit eget gravida cum sociis
          natoque penatibus et. Non tellus orci ac auctor augue. Convallis
          tellus id interdum velit laoreet. Id nibh tortor id aliquet lectus
          proin nibh nisl. Massa tincidunt nunc pulvinar sapien et. Vulputate eu
          scelerisque felis imperdiet proin fermentum leo vel. Metus aliquam
          eleifend mi in nulla posuere. Fermentum leo vel orci porta non
          pulvinar neque laoreet suspendisse.
        </h1>
      </div>
    </Template>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {}
  };
};

export default Home;
