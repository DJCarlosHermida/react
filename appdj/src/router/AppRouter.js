
const AppRouter = () => {

    const { user } = useLoginContext()

    return (
        <BrowserRouter>
            {user.logged
                ? <>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Inicio />} />
                        <Route path="/productos" element={<ItemListContainer />} />
                        <Route path="/productos/:categoryId" element={<ItemListContainer />} />
                        <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
                        <Route path="/nosotros" element={<Nosotros />} />
                        <Route path="/contacto" element={<Contacto />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="*" element={<Navigate to={"/"} />} />
                    </Routes>
                    <Footer />
                </>
                : <Routes>
                    <Route path="/login" element={<LoginScreen />} />     
                    <Route path="/login" element={ <Navigate to={"/"} /> } />
                </Routes>
            }
        </BrowserRouter>

    )
}
