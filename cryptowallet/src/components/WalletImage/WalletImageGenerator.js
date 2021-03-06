import React from 'react';
import PropTypes from 'prop-types';
import QRCode from 'qrcode-svg';
import backgroudCanvas from "../../assets/backgroudCanvas";
import { getIdenticonSVG } from "../../utils/jdenticon";
import './styles/WalletImageGenerator.css';
import {t} from "../../utils/translate";

class WalletImageGenerator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            image: null,
            count: 0
        }
    }

    componentDidMount() {
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext("2d");
        const { imageBack, imageIdenticon, imageQr } = this.refs;

        imageBack.onload = () => {
            ctx.drawImage(imageBack, 0, 0);
            this._tryRenderCanvas();
        };

        imageIdenticon.onload = () => {
            ctx.drawImage(imageIdenticon, 20, 170);
            this._tryRenderCanvas();
        };

        imageQr.onload = () => {
            ctx.drawImage(imageQr, 430, 170);
            this._tryRenderCanvas();
        };
    }

    _tryRenderCanvas() {
        let { count } = this.state;
        count++;
        if (count === 3) {
            const canvas = this.refs.canvas;
            this.setState({image: canvas.toDataURL('image/png')})
        } else {
            this.setState({count})
        }
    }

    render() {
        const { seed } = this.props;
        const identicon = window.btoa(getIdenticonSVG({seed: seed.hex}));
        const qrcode = new QRCode({content: seed.encrypted, width: 400, height: 400, padding: 4}).svg();
        const { image } = this.state;
        return(
            <React.Fragment>
                <canvas ref="canvas" width={850} height={600} style={{width: '100%', display: 'none'}}/>
                <img alt="Something wrong" ref="imageBack" src={backgroudCanvas} style={{display: 'none'}} />
                <img alt="Something wrong" ref="imageIdenticon" src={`data:image/svg+xml;base64,${identicon}`} style={{display: 'none'}} />
                <img alt="Something wrong" ref="imageQr" src={`data:image/svg+xml;base64,${window.btoa(qrcode)}`} style={{display: 'none'}} />
                {image
                    ? <img alt={t("Generate QR code")} className="WalletImage" src={image}/>
                    : null
                }
            </React.Fragment>
        )
    }
}

WalletImageGenerator.propTypes = {
    seed: PropTypes.shape({
        hex: PropTypes.string.isRequired,
        encrypted: PropTypes.string.isRequired,
        mnemonics: PropTypes.string,
    }).isRequired
};

export default WalletImageGenerator;