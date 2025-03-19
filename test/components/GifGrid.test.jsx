import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('pruebas en <GifGrid />', () => { 

    const category = 'One Punch';

    test('debe de mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render( <GifGrid category={ category }/>);
        expect( screen.getByText( 'Cargando...' ) );
        expect( screen.getByText( category ) );
        
    });

    test('dede mostrar items cuando se cargan las imagenes mediante useFetchGifs', () => { 
        

        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://saitama.com'
            },{
                id: '123',
                title: 'Goku',
                url: 'https://goku.com'
            }
        ]
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render( <GifGrid category={ category }/>);
        expect( screen.getAllByRole('img').length ).toBe(2);



     })

})

