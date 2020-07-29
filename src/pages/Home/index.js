import React from 'react';
import Menu from '../../components/Menu/index';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain/index';
import Carousel from '../../components/Carousel/index';
import Footer from '../../components/Footer/index'

function Home() {
  return (
    <div style={{ background:"#141414" }}>
      <Menu />
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-end?"}
      />
      <Carousel category={dadosIniciais.categorias[0]} ignoreFirstVideo={true}/>
      <Carousel category={dadosIniciais.categorias[1]} ignoreFirstVideo={false}/>
      <Carousel category={dadosIniciais.categorias[2]} ignoreFirstVideo={false}/>
      <Carousel category={dadosIniciais.categorias[3]} ignoreFirstVideo={false}/>
      <Carousel category={dadosIniciais.categorias[4]} ignoreFirstVideo={false}/>
      <Carousel category={dadosIniciais.categorias[5]} ignoreFirstVideo={false}/>
      <Footer/>
    </div>
  );
}

export default Home;
