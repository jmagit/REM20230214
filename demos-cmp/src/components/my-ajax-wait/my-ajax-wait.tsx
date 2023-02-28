import { Component, h, getAssetPath, Prop } from '@stencil/core';

@Component({
  tag: 'my-ajax-wait',
  styles: `
      :host {
        display: block;
      }

      .ajax-wait {
        position: fixed;
        background-color: black;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        opacity: 0.3;
        z-index:100;
      }

      img {
        position: fixed;
        left: 45%;
        top: 45%;
        width: 10%;
        height: auto;
        opacity: 1;
        z-index:101;
      }

      .loader {
        border: 16px dotted #1a93fd;
        /*border-top: 16px solid #abdeff;*/
        border-radius: 50%;
        animation: spin 5s linear infinite;
        position: fixed;
        left: 45%;
        top: 45%;
        width: 80px;
        height: 80px;
        z-index:101;
        opacity: 1;
      }

      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `,
  shadow: true,
  assetsDirs: ['assets'],
})
export class MyAjaxWait {
  @Prop() hidden = false;
  render() {
    if(this.hidden) return;
    return (
      <div>
        <div class="ajax-wait">Espera</div>
        <div class="loader"></div>
        {/* <img src={getAssetPath('./assets/loading.gif')} alt="Esperando ..." /> */}
      </div>
    );
  }

}
