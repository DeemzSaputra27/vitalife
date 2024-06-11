export default function ApplicationLogo(props) {
    return (
        <svg {...props} viewBox="0 0 316 316">
            <img
                src={require("../image/LOGO_2.png")}
                width="100%"
                height="100%"
            />
        </svg>
    );
}
