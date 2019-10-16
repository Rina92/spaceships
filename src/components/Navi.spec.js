import Navigation from './Navi.js';
import {data} from './data';

it('Should test handle filtering', () => {
    const nav = new Navigation();
    const filtered1 = nav.filterDataWith(data, true, false, false);

    expect(filtered1.length).toEqual(2);
    expect(filtered1[0].flight_number).toEqual(14);
    expect(filtered1[1].flight_number).toEqual(15);

    const filtered2 = nav.filterDataWith(data, false, true, false);
    expect(filtered2.length).toEqual(0);

    
    const filtered3 = nav.filterDataWith(data, false, false, true);
    expect(filtered3.length).toEqual(0);
});