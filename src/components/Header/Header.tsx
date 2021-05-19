import Button from '../Button/Button'

const Header = ({ onReset, onStart, onSelect, onCancel, sortType }: any) => {
    
    // maybe we can lift this up for global
    const liSorts = ["BUBBLE", "INSERTION", "SELECTION", "MERGE", "QUICK"];

    return (
        <div className="header">
            <div>
                <Button text="Reset" onClick={()=>{ onReset() }} />
                <Button text="Start" onClick={()=>{ onStart() }} />
                <Button text="Cancel" onClick={()=>{ onCancel() }} />
                <label>current sort : {sortType}</label>
            </div>
            <div>
                {
                    liSorts.map((sort, i)=>{
                        return <Button key={i} text={sort} onClick={()=>{ onSelect(sort) }} />
                    })    
                }
            </div>
        </div>
    );
}

export default Header