import _ from 'lodash'

const convertGraphFormat = ({ data, targets=[] }) => {
    // convert list of numbers (data) into react-vis format [{x:1, y:1, color:1}]
    // default color : 1, target color : 2
    const DEFAULT = 1;
    const HIGHTLIGHT = 2;
    let convertedData = _.map(data, (v, i)=>{
        let colorToUse = _.includes(targets, i)?HIGHTLIGHT:DEFAULT;
        return { x:i, y:v, color:colorToUse };
    });
    return convertedData;
};

export default convertGraphFormat;