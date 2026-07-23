

export const Footer = () => {
    return (
        <footer>
            <p className="relative flex flex-col items-center justify-center px-4">
            Built with &#x2661; by <a href="https://github.com/sonashine" target="_blank"
            >Sonakshi Sharma (sonashine)</a>
            </p>
            <p className="relative flex flex-col items-center justify-center px-4">
              &copy; {new Date().getFullYear()}  
            </p>
        </footer>
    )
}