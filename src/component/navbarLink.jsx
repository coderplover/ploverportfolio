export default function NavbarLink(name) {
    
    return (
        <><div className="text-zinc-300 text-md flex gap-10 ">
                    <NavbarLink name='Ana Sayfa'/>
                    <NavbarLink name='Hakkımda'/>
                    <NavbarLink name='Projelerim'/>
                    <NavbarLink name='İletişim'/>
                    
                </div>
            <a href="#" className="hover:text-zinc-50 duration-300 hover:-translate-y-0.5">{name.name}</a>
        </>
    )
}