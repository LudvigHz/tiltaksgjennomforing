import { Inkluderingstilskuddsutgift, InkluderingstilskuddsutgiftType } from '@/types/avtale';
import { useEffect, useState } from 'react';

export const useTilskuddsutgift = (initiellInkluderingstilskuddutgiftListe: Inkluderingstilskuddsutgift[]) => {
    const [inkluderingstilskuddsutgiftListe, setInkluderingstilskuddsutgiftListe] = useState<Inkluderingstilskuddsutgift[]>(initiellInkluderingstilskuddutgiftListe);

    useEffect(() => {
        setInkluderingstilskuddsutgiftListe(initiellInkluderingstilskuddutgiftListe);
    }, [initiellInkluderingstilskuddutgiftListe]);

    const leggTilInkluderingstilskuddsutgift = (beløp: number, type: InkluderingstilskuddsutgiftType) => {
        const nyInkluderingstilskuddsutgiftListe = [...inkluderingstilskuddsutgiftListe];
        nyInkluderingstilskuddsutgiftListe.push({ beløp, type });
        setInkluderingstilskuddsutgiftListe(nyInkluderingstilskuddsutgiftListe);
        return nyInkluderingstilskuddsutgiftListe;
    };

    const endreInkluderingstilskuddsutgift = (index: number, beløp: number, type: InkluderingstilskuddsutgiftType) => {
        const nyInkluderingstilskuddsutgiftListe = [...inkluderingstilskuddsutgiftListe];
        nyInkluderingstilskuddsutgiftListe[index] = { beløp: beløp, type: type };
        setInkluderingstilskuddsutgiftListe(nyInkluderingstilskuddsutgiftListe);
        return nyInkluderingstilskuddsutgiftListe;
    };

    const ledigeInkluderingstilskuddstyper = finnLedigeInkluderingstilskuddstyper(inkluderingstilskuddsutgiftListe).sort();
    const ledigeInkluderingstilskuddstyperInngåttAvtale = finnLedigeInkluderingstilskuddstyperInngåttAvtale(inkluderingstilskuddsutgiftListe).sort();

    const sletteInkluderingstilskuddsutgift = (index: number) => {
        const nyInkluderingstilskuddsutgiftListe = [...inkluderingstilskuddsutgiftListe];
        nyInkluderingstilskuddsutgiftListe.splice(index, 1);
        setInkluderingstilskuddsutgiftListe(nyInkluderingstilskuddsutgiftListe);
        return nyInkluderingstilskuddsutgiftListe;
    };

    return { inkluderingstilskuddsutgiftListe, ledigeInkluderingstilskuddstyperInngåttAvtale, ledigeInkluderingstilskuddstyper, leggTilInkluderingstilskuddsutgift, endreInkluderingstilskuddsutgift, sletteInkluderingstilskuddsutgift };
};

const finnLedigeInkluderingstilskuddstyperInngåttAvtale = (brukteTyper: Inkluderingstilskuddsutgift[]): InkluderingstilskuddsutgiftType[] => {
    // Typer som er lagt til i tidligere versjoner kan brukes på nytt 1 gang.
    const alleTyper = ["ARBEIDSHJELPEMIDLER", 'OPPLÆRING', 'PROGRAMVARE', 'TILTAKSPLASS', 'UTSTYR', 'TILRETTELEGGINGSBEHOV'];
    brukteTyper.forEach(bruktType => {
        if (bruktType.id === undefined) {
            // typen er ikke i backend og skal brukes opp
            const index = alleTyper.findIndex(type => type === bruktType.type);
            alleTyper.splice(index, 1);
        }
    });
    return alleTyper as InkluderingstilskuddsutgiftType[];
}


const finnLedigeInkluderingstilskuddstyper = (brukteTyper: Inkluderingstilskuddsutgift[]): InkluderingstilskuddsutgiftType[] => {
    // Typer kan kun brukes 1 gang.
    const valgteTyper = (): InkluderingstilskuddsutgiftType[] => {
        return brukteTyper.map(inkluderingstilskuddsutgift => inkluderingstilskuddsutgift.type);
    };
    const typer = ["ARBEIDSHJELPEMIDLER", 'OPPLÆRING', 'PROGRAMVARE', 'TILTAKSPLASS', 'UTSTYR', 'TILRETTELEGGINGSBEHOV'] as const;
    return typer.filter(type => !valgteTyper().includes(type));
};