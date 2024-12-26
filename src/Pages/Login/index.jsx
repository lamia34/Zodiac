import React from "react";
import * as Components from './Component';
import Header from "../../components/Header";
import Instagram from "../../components/Instagram";
import Footer from "../../components/Footer";
import UpIcon from "../../components/UpIcon";

function Login() {
    const [signIn, toggle] = React.useState(true);
     return(
        <>
        <Header/>
        <br/>
        <br/>
        <br/>
        <Components.Container>
  <Components.SignUpContainer signinIn={signIn}>
    <Components.Form>
      <Components.Title>Hesab Yarat</Components.Title>
      <Components.Input type="text" placeholder="Ad" />
      <Components.Input type="email" placeholder="E-poçt" />
      <Components.Input type="password" placeholder="Şifrə" />
      <Components.Button>Qeydiyyatdan Keç</Components.Button>
    </Components.Form>
  </Components.SignUpContainer>
  <Components.SignInContainer signinIn={signIn}>
    <Components.Form>
      <Components.Title>Daxil Ol</Components.Title>
      <Components.Input type="email" placeholder="E-poçt" />
      <Components.Input type="password" placeholder="Şifrə" />
      <Components.Anchor href="#">Şifrəni unutmusunuz?</Components.Anchor>
      <Components.Button>Daxil Ol</Components.Button>
    </Components.Form>
  </Components.SignInContainer>
  <Components.OverlayContainer signinIn={signIn}>
    <Components.Overlay signinIn={signIn}>
      <Components.LeftOverlayPanel signinIn={signIn}>
        <Components.Title>Yenidən Xoş Gəldiniz!</Components.Title>
        <Components.Paragraph>
          Bizimlə əlaqədə qalmaq üçün şəxsi məlumatlarınızla daxil olun.
        </Components.Paragraph>
        <Components.GhostButton onClick={() => toggle(true)}>
          Daxil Ol
        </Components.GhostButton>
      </Components.LeftOverlayPanel>
      <Components.RightOverlayPanel signinIn={signIn}>
        <Components.Title>Salam, Dost!</Components.Title>
        <Components.Paragraph>
          Şəxsi məlumatlarınızı daxil edin və bizimlə səyahətə başlayın.
        </Components.Paragraph>
        <Components.GhostButton onClick={() => toggle(false)}>
          Qeydiyyatdan Keç
        </Components.GhostButton>
      </Components.RightOverlayPanel>
    </Components.Overlay>
  </Components.OverlayContainer>
</Components.Container>

         <br/>
        <br/>
        <br/>
         <Instagram/>
            <Footer/>
            <UpIcon/>
            </>
     )
}
export default Login;


