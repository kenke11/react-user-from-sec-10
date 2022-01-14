import Card from "./Card";
import Button from "./Button";

const ErrorModal = (props) => {
    return (
        <div>
            <div className="backdrop" onClick={props.onConfirm}/>
            <Card className="modal">
                <header className="p-4 bg-purple-900">
                    <h2 className="m-0 text-white">{props.title}</h2>
                </header>
                <div className="p-4">
                    <p>{props.message}</p>
                </div>
                <footer className="p-4 flex justify-end">
                    <Button onClick={props.onConfirm}>
                        Okay
                    </Button>
                </footer>
            </Card>
        </div>
    )
}

export default ErrorModal;