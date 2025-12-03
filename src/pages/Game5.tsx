import { useEffect} from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function Game5() {
  

  const { unityProvider,unload } = useUnityContext({
    loaderUrl: "Game5/Area51.loader.js",
    dataUrl: "Game5/Area51.data.br",
    frameworkUrl: "Game5/Area51.framework.js.br",
    codeUrl: "Game5/Area51.wasm.br",
  });


  useEffect(() => {
        
        return () => {
           
            unload().catch((e) => {
                console.warn("Unity no estaba listo para descargarse o ya se cerró:", e);
            });
            
            console.log("Orden de descarga enviada a Unity.");
        };
    }, [unload]); 


  return (
    <div className="centered-container">
      <div className="centered-content">
        <h1 className="centered-title">Game 5</h1>
          <Unity unityProvider={unityProvider} className="centered-unity" />
      </div>
    </div>
  );
}

export default Game5;