import { useLocation } from 'react-router-dom';

function NotFound() {

    const location = useLocation();

  return (
    <div>
        <h1>Oups !</h1>
        <h2>R U lost ?</h2>
        <img alt="404: page not found" src='https://img.buzzfeed.com/buzzfeed-static/static/2016-02/1/11/enhanced/webdr07/anigif_enhanced-21255-1454345675-2.gif' />
        <p>Le chemin que vous rechercher n'xiste pas</p>
    </div>
  )
}

export default NotFound