import Container from "../Container/Container"

function Section({ children, className = '', containerClassName = ''}) {
  return (
    <section className={`py-16 md:py-24 ${className}`}>
        <Container className={containerClassName}>
            {children}
        </Container>
    </section>
  )
}

export default Section