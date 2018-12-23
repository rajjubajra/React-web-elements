import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneVolume} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';


const TopBlock = styled.div`

    > section.yellow{
      background-color: #fbc531;
      color: #273c75;
    }
    > section.blue{
      background-color: #0097e6;
      color: #eee;
    }
    > section.pico-void{
      background-color: #192a56;
      color: #ccc;
    }
    > section.red{
      background-color: #c23616;
      color: #fff;
    }

    > section > ul > li{
      list-style: none;
    }

    /* Mobile device */
    @media(max-width: 449px){
          > section {
            height: 70px;
            margin-bottom: 20px;
            display:flex;
            flex-direction: column;
            justify-content: center;
          }

          > section > ul {
            display: flex;
            align-self: center;
          }


          >section > ul.socialmedia li{
            margin: 0px 5px;
            padding: 3px;
            cursor: pointer;
            position: relative;
            top: -10px;
          }
    }

    /*Desktop and Table device */
    @media(min-width:450px){
          > section {
            height: 40px;
            margin-bottom: 20px;
            display:flex;
            justify-content: space-between;
          }

          > section > ul {
            display: flex;
            align-self: center;
            margin-right: 20px;
          }


          >section > ul.socialmedia li{
            margin: 0px 5px;
            padding:3px;
            cursor: pointer;
          }
    }

`;



const TopBar001 = () => {




    return(
      <div>
      <TopBlock>
          <section className="yellow">
            <ul className="tel">
              <li><FontAwesomeIcon icon={faPhoneVolume} /> : 00 977 1 9841269262</li>
            </ul>
            <ul className="socialmedia">
              <li><FontAwesomeIcon icon={faFacebook} /></li>
              <li><FontAwesomeIcon icon={faTwitter} /></li>
              <li><FontAwesomeIcon icon={faInstagram} /></li>
              <li><FontAwesomeIcon icon={faYoutube} /></li>
            </ul>
          </section>

          <section className="blue">
            <ul className="tel">
              <li><FontAwesomeIcon icon={faPhoneVolume} /> : 00 977 1 9841269262</li>
            </ul>
            <ul className="socialmedia">
              <li><FontAwesomeIcon icon={faFacebook} /></li>
              <li><FontAwesomeIcon icon={faTwitter} /></li>
              <li><FontAwesomeIcon icon={faInstagram} /></li>
              <li><FontAwesomeIcon icon={faYoutube} /></li>
            </ul>
          </section>

          <section className="pico-void">
            <ul className="tel">
              <li><FontAwesomeIcon icon={faPhoneVolume} /> : 00 977 1 9841269262</li>
            </ul>
            <ul className="socialmedia">
              <li><FontAwesomeIcon icon={faFacebook} /></li>
              <li><FontAwesomeIcon icon={faTwitter} /></li>
              <li><FontAwesomeIcon icon={faInstagram} /></li>
              <li><FontAwesomeIcon icon={faYoutube} /></li>
            </ul>
          </section>

          <section className="red">
            <ul className="tel">
              <li><FontAwesomeIcon icon={faPhoneVolume} /> : 00 977 1 9841269262</li>
            </ul>
            <ul className="socialmedia">
              <li><FontAwesomeIcon icon={faFacebook} /></li>
              <li><FontAwesomeIcon icon={faTwitter} /></li>
              <li><FontAwesomeIcon icon={faInstagram} /></li>
              <li><FontAwesomeIcon icon={faYoutube} /></li>
            </ul>
          </section>

      </TopBlock>
      </div>
    );

}


export default TopBar001;
