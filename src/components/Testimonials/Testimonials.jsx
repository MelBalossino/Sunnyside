
const Testimonials = ({ img, testimonial, name, position }) => {
    return (
        <div>
            <img src={img} alt="Photo" />
            <p>{testimonial}</p>
            <h3>{name}</h3>
            <p>{position}</p>
        </div>
    )
}
export default Testimonials