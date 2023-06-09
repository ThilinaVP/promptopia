import Nav from '@components/Nav';
import Provider from '@components/Provider';
import '@styles/globals.css';

export const metadata = {
    title: "Promptopia",
    description: "discover and share AI promptis"
}

const RootLayout = ({ children }) => {
  return (
    <html>
        <body>
            <Provider>
                <div className="main">
                    <div className='gradient'/>
                </div>

                <main className='app'>
                    <Nav />
                    {children}
                </main>
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout