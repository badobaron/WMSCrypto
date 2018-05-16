import React, { Component } from 'react';
import signers from '../utils/signers';
import Card from "./Cards/Card";
import DownloadButton from "./buttons/DownloadButton";
import {t} from "../utils/translate";
import {sendPut} from "../utils";


const WITH_PREFIX = [60];
const WITH_RAW = [60];

const Raw = ({ raw }) => {
    if (!raw) {
        return null
    }
    return (
        <div>
            <p><small className="text-muted">Raw transaction data</small><br/>
                {JSON.stringify(raw)}
            </p>
        </div>
    )
};

class TxSigner extends Component {

    render() {
        const { seed, transaction, transactionSaved, coin, uuid, onOperationResult } = this.props;
        if (!(seed && transaction &&transactionSaved)) {
            return null
        }
        const signed = signers[coin](seed, transaction);
        const data = {...transaction, coin, signed};
        return(
            <Card>
                <Raw raw={WITH_RAW.indexOf(coin) !== -1 ? data.raw : null}/>
                <div>
                    <p>
                    <small className="text-muted">{t("Transaction signature")}</small><br/>
                        {WITH_PREFIX.indexOf(coin) !== -1 ? '0x' : ''}{data.signed}
                    </p>
                </div>
                <DownloadButton title={t("Download transaction data")}
                                obj={data}
                                id="downloadTransaction"/>
                <br/>
                {uuid
                    ? <button className="btn btn-danger"
                        onClick={() => {sendPut(
                            uuid,
                            data,
                            onOperationResult
                        )}}>
                    Send transaction
                    </button>
                    : null
                }
            </Card>
        )
    }
}

export default TxSigner
