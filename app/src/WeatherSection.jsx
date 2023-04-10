export default function WeatherSection(props) {
    return (
        <div>
            <h1>{props.data.name}</h1>
            <p>{props.data.country}</p>
        </div>
    )
}