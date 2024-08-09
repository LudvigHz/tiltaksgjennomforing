import VeilederAvtaleStatus from '@/AvtaleSide/AvtaleStatus/VeilederAvtaleStatus';
import { Meta, StoryObj } from '@storybook/react';
import { AvbrytelseGrunn, AvtaleStatus, TilskuddPeriodeStatus, TiltaksType } from '@/types/avtale';

const meta = {
    title: 'Tiltaksgjennomforing/Statuser/Veileder',
    component: VeilederAvtaleStatus,
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: 'fullscreen',
    },
} satisfies Meta<typeof VeilederAvtaleStatus>;

export default meta;
type Story = StoryObj<typeof meta>;

const erUfordelt = {
    erUfordelt: true,
    statusSomEnum: 'ANNULLERT' as AvtaleStatus,
    annullertTidspunkt: '2021-08-01',
    tiltakstype: 'MIDLERTIDIG_LONNSTILSKUDD' as TiltaksType,
    tilskuddPeriode: [
        {
            beløp: 23324,
            startDato: '2023-05-03',
            sluttDato: '2023-05-31',
            lonnstilskuddProsent: 60,
            id: '370b1f98-9431-4286-98ce-1cc61c824cb2',
            godkjentAvNavIdent: undefined,
            godkjentTidspunkt: undefined,
            enhet: undefined,
            enhetsnavn: undefined,
            avslagsårsaker: new Set([]),
            avslagsforklaring: undefined,
            avslåttAvNavIdent: undefined,
            avslåttTidspunkt: undefined,
            løpenummer: 1,
            status: 'UBEHANDLET' as TilskuddPeriodeStatus,
            refusjonStatus: undefined,
            aktiv: true,
            kanBesluttesFom: '-999999999-01-01',
        },
    ],
    godkjentAvDeltaker: '2021-08-01',
    godkjentAvArbeidsgiver: '20-08-01',
    godkjentAvVeileder: '2021-08-01',
    gjeldendeTilskuddsperiode: {
        beløp: 23324,
        startDato: '2023-05-03',
        sluttDato: '2023-05-31',
        lonnstilskuddProsent: 60,
        id: '370b1f98-9431-4286-98ce-1cc61c824cb2',
        godkjentAvNavIdent: undefined,
        godkjentTidspunkt: undefined,
        enhet: undefined,
        enhetsnavn: undefined,
        avslagsårsaker: new Set([]),
        avslagsforklaring: undefined,
        avslåttAvNavIdent: undefined,
        avslåttTidspunkt: undefined,
        løpenummer: 1,
        status: 'UBEHANDLET' as TilskuddPeriodeStatus,
        refusjonStatus: undefined,
        aktiv: true,
        kanBesluttesFom: '-999999999-01-01',
    },
    avtaleInngått: '2021-08-01',
    erAnnullertEllerAvbrutt: true,
    annullertGrunn: 'annulert grunn',
    avbruttGrunn: 'Begynt i arbeid' as AvbrytelseGrunn,
    gjeldendeInnhold: {
        startDato: '2021-08-01',
        sluttDato: '2021-08-01',
    },
};

export const ErUfordelt: Story = {
    name: 'Annullert',
    args: { avtale: erUfordelt },
};

const annullert = {
    erUfordelt: false,
    statusSomEnum: 'ANNULLERT' as AvtaleStatus,
    annullertTidspunkt: '2021-08-01',
    tiltakstype: 'MIDLERTIDIG_LONNSTILSKUDD' as TiltaksType,
    tilskuddPeriode: [
        {
            beløp: 23324,
            startDato: '2023-05-03',
            sluttDato: '2023-05-31',
            lonnstilskuddProsent: 60,
            id: '370b1f98-9431-4286-98ce-1cc61c824cb2',
            godkjentAvNavIdent: undefined,
            godkjentTidspunkt: undefined,
            enhet: undefined,
            enhetsnavn: undefined,
            avslagsårsaker: new Set([]),
            avslagsforklaring: undefined,
            avslåttAvNavIdent: undefined,
            avslåttTidspunkt: undefined,
            løpenummer: 1,
            status: 'UBEHANDLET' as TilskuddPeriodeStatus,
            refusjonStatus: undefined,
            aktiv: true,
            kanBesluttesFom: '-999999999-01-01',
        },
    ],
    godkjentAvDeltaker: '2021-08-01',
    godkjentAvArbeidsgiver: '20-08-01',
    godkjentAvVeileder: '2021-08-01',
    gjeldendeTilskuddsperiode: {
        beløp: 23324,
        startDato: '2023-05-03',
        sluttDato: '2023-05-31',
        lonnstilskuddProsent: 60,
        id: '370b1f98-9431-4286-98ce-1cc61c824cb2',
        godkjentAvNavIdent: undefined,
        godkjentTidspunkt: undefined,
        enhet: undefined,
        enhetsnavn: undefined,
        avslagsårsaker: new Set([]),
        avslagsforklaring: undefined,
        avslåttAvNavIdent: undefined,
        avslåttTidspunkt: undefined,
        løpenummer: 1,
        status: 'UBEHANDLET' as TilskuddPeriodeStatus,
        refusjonStatus: undefined,
        aktiv: true,
        kanBesluttesFom: '-999999999-01-01',
    },
    avtaleInngått: '2021-08-01',
    erAnnullertEllerAvbrutt: true,
    annullertGrunn: 'annulert grunn',
    avbruttGrunn: 'Begynt i arbeid' as AvbrytelseGrunn,
    gjeldendeInnhold: {
        startDato: '2021-08-01',
        sluttDato: '2021-08-01',
    },
};

export const Annullert: Story = {
    name: 'Annullert',
    args: { avtale: annullert },
};

const avbrutt = {
    erUfordelt: false,
    statusSomEnum: 'AVBRUTT' as AvtaleStatus,
    annullertTidspunkt: '2021-08-01',
    tiltakstype: 'MIDLERTIDIG_LONNSTILSKUDD' as TiltaksType,
    tilskuddPeriode: [
        {
            beløp: 23324,
            startDato: '2023-05-03',
            sluttDato: '2023-05-31',
            lonnstilskuddProsent: 60,
            id: '370b1f98-9431-4286-98ce-1cc61c824cb2',
            godkjentAvNavIdent: undefined,
            godkjentTidspunkt: undefined,
            enhet: undefined,
            enhetsnavn: undefined,
            avslagsårsaker: new Set([]),
            avslagsforklaring: undefined,
            avslåttAvNavIdent: undefined,
            avslåttTidspunkt: undefined,
            løpenummer: 1,
            status: 'UBEHANDLET' as TilskuddPeriodeStatus,
            refusjonStatus: undefined,
            aktiv: true,
            kanBesluttesFom: '-999999999-01-01',
        },
    ],
    godkjentAvDeltaker: '2021-08-01',
    godkjentAvArbeidsgiver: '20-08-01',
    godkjentAvVeileder: '2021-08-01',
    gjeldendeTilskuddsperiode: {
        beløp: 23324,
        startDato: '2023-05-03',
        sluttDato: '2023-05-31',
        lonnstilskuddProsent: 60,
        id: '370b1f98-9431-4286-98ce-1cc61c824cb2',
        godkjentAvNavIdent: undefined,
        godkjentTidspunkt: undefined,
        enhet: undefined,
        enhetsnavn: undefined,
        avslagsårsaker: new Set([]),
        avslagsforklaring: undefined,
        avslåttAvNavIdent: undefined,
        avslåttTidspunkt: undefined,
        løpenummer: 1,
        status: 'UBEHANDLET' as TilskuddPeriodeStatus,
        refusjonStatus: undefined,
        aktiv: true,
        kanBesluttesFom: '-999999999-01-01',
    },
    avtaleInngått: '2021-08-01',
    erAnnullertEllerAvbrutt: true,
    annullertGrunn: 'annulert grunn',
    avbruttGrunn: 'Begynt i arbeid' as AvbrytelseGrunn,
    gjeldendeInnhold: {
        startDato: '2021-08-01',
        sluttDato: '2021-08-01',
    },
};

export const Avbrutt: Story = {
    name: 'Avbrutt',
    args: { avtale: avbrutt },
};

const påbegynt = {
    erUfordelt: false,
    statusSomEnum: 'PÅBEGYNT' as AvtaleStatus,
    annullertTidspunkt: '2021-08-01',
    tiltakstype: 'MIDLERTIDIG_LONNSTILSKUDD' as TiltaksType,
    tilskuddPeriode: [
        {
            beløp: 23324,
            startDato: '2023-05-03',
            sluttDato: '2023-05-31',
            lonnstilskuddProsent: 60,
            id: '370b1f98-9431-4286-98ce-1cc61c824cb2',
            godkjentAvNavIdent: undefined,
            godkjentTidspunkt: undefined,
            enhet: undefined,
            enhetsnavn: undefined,
            avslagsårsaker: new Set([]),
            avslagsforklaring: undefined,
            avslåttAvNavIdent: undefined,
            avslåttTidspunkt: undefined,
            løpenummer: 1,
            status: 'UBEHANDLET' as TilskuddPeriodeStatus,
            refusjonStatus: undefined,
            aktiv: true,
            kanBesluttesFom: '-999999999-01-01',
        },
    ],
    godkjentAvDeltaker: '2021-08-01',
    godkjentAvArbeidsgiver: '20-08-01',
    godkjentAvVeileder: '2021-08-01',
    gjeldendeTilskuddsperiode: {
        beløp: 23324,
        startDato: '2023-05-03',
        sluttDato: '2023-05-31',
        lonnstilskuddProsent: 60,
        id: '370b1f98-9431-4286-98ce-1cc61c824cb2',
        godkjentAvNavIdent: undefined,
        godkjentTidspunkt: undefined,
        enhet: undefined,
        enhetsnavn: undefined,
        avslagsårsaker: new Set([]),
        avslagsforklaring: undefined,
        avslåttAvNavIdent: undefined,
        avslåttTidspunkt: undefined,
        løpenummer: 1,
        status: 'UBEHANDLET' as TilskuddPeriodeStatus,
        refusjonStatus: undefined,
        aktiv: true,
        kanBesluttesFom: '-999999999-01-01',
    },
    avtaleInngått: '2021-08-01',
    erAnnullertEllerAvbrutt: true,
    annullertGrunn: 'annulert grunn',
    avbruttGrunn: 'Begynt i arbeid' as AvbrytelseGrunn,
    gjeldendeInnhold: {
        startDato: '2021-08-01',
        sluttDato: '2021-08-01',
    },
};

export const Påbegynt: Story = {
    name: 'Påbegynt',
    args: { avtale: påbegynt },
};

const manglerGodkjenningVeilederHarGodkjent = {
    erUfordelt: false,
    statusSomEnum: 'MANGLER_GODKJENNING' as AvtaleStatus,
    annullertTidspunkt: '2021-08-01',
    tiltakstype: 'MIDLERTIDIG_LONNSTILSKUDD' as TiltaksType,
    tilskuddPeriode: [
        {
            beløp: 23324,
            startDato: '2023-05-03',
            sluttDato: '2023-05-31',
            lonnstilskuddProsent: 60,
            id: '370b1f98-9431-4286-98ce-1cc61c824cb2',
            godkjentAvNavIdent: undefined,
            godkjentTidspunkt: undefined,
            enhet: undefined,
            enhetsnavn: undefined,
            avslagsårsaker: new Set([]),
            avslagsforklaring: undefined,
            avslåttAvNavIdent: undefined,
            avslåttTidspunkt: undefined,
            løpenummer: 1,
            status: 'UBEHANDLET' as TilskuddPeriodeStatus,
            refusjonStatus: undefined,
            aktiv: true,
            kanBesluttesFom: '-999999999-01-01',
        },
    ],
    godkjentAvDeltaker: '2021-08-01',
    godkjentAvArbeidsgiver: '20-08-01',
    godkjentAvVeileder: '2021-08-01',
    gjeldendeTilskuddsperiode: {
        beløp: 23324,
        startDato: '2023-05-03',
        sluttDato: '2023-05-31',
        lonnstilskuddProsent: 60,
        id: '370b1f98-9431-4286-98ce-1cc61c824cb2',
        godkjentAvNavIdent: undefined,
        godkjentTidspunkt: undefined,
        enhet: undefined,
        enhetsnavn: undefined,
        avslagsårsaker: new Set([]),
        avslagsforklaring: undefined,
        avslåttAvNavIdent: undefined,
        avslåttTidspunkt: undefined,
        løpenummer: 1,
        status: 'UBEHANDLET' as TilskuddPeriodeStatus,
        refusjonStatus: undefined,
        aktiv: true,
        kanBesluttesFom: '-999999999-01-01',
    },
    avtaleInngått: '2021-08-01',
    erAnnullertEllerAvbrutt: true,
    annullertGrunn: 'annulert grunn',
    avbruttGrunn: 'Begynt i arbeid' as AvbrytelseGrunn,
    gjeldendeInnhold: {
        startDato: '2021-08-01',
        sluttDato: '2021-08-01',
    },
};

export const ManglerGodkjenningVeilederHarGodkjent: Story = {
    name: 'Mangler Godkjenning Veileder har godkjent men manger godkjenning av Beslutter',
    args: { avtale: manglerGodkjenningVeilederHarGodkjent },
};

const manglerGodkjenningArbeidsgiverOgDeltakerHarGodkjentMenIkkeMentor = {
    erUfordelt: false,
    statusSomEnum: 'MANGLER_GODKJENNING' as AvtaleStatus,
    annullertTidspunkt: '2021-08-01',
    tiltakstype: 'MENTOR' as TiltaksType,
    tilskuddPeriode: [
        {
            beløp: 23324,
            startDato: '2023-05-03',
            sluttDato: '2023-05-31',
            lonnstilskuddProsent: 60,
            id: '370b1f98-9431-4286-98ce-1cc61c824cb2',
            godkjentAvNavIdent: undefined,
            godkjentTidspunkt: undefined,
            enhet: undefined,
            enhetsnavn: undefined,
            avslagsårsaker: new Set([]),
            avslagsforklaring: undefined,
            avslåttAvNavIdent: undefined,
            avslåttTidspunkt: undefined,
            løpenummer: 1,
            status: 'UBEHANDLET' as TilskuddPeriodeStatus,
            refusjonStatus: undefined,
            aktiv: true,
            kanBesluttesFom: '-999999999-01-01',
        },
    ],
    godkjentAvDeltaker: '2024-05-10',
    godkjentAvArbeidsgiver: '2024-05-10',
    godkjentAvVeileder: '',
    erGodkjentTaushetserklæringAvMentor: false,
    gjeldendeTilskuddsperiode: {
        beløp: 23324,
        startDato: '2023-05-03',
        sluttDato: '2023-05-31',
        lonnstilskuddProsent: 60,
        id: '370b1f98-9431-4286-98ce-1cc61c824cb2',
        godkjentAvNavIdent: undefined,
        godkjentTidspunkt: undefined,
        enhet: undefined,
        enhetsnavn: undefined,
        avslagsårsaker: new Set([]),
        avslagsforklaring: undefined,
        avslåttAvNavIdent: undefined,
        avslåttTidspunkt: undefined,
        løpenummer: 1,
        status: 'UBEHANDLET' as TilskuddPeriodeStatus,
        refusjonStatus: undefined,
        aktiv: true,
        kanBesluttesFom: '-999999999-01-01',
    },
    avtaleInngått: '2021-08-01',
    erAnnullertEllerAvbrutt: true,
    annullertGrunn: 'annulert grunn',
    avbruttGrunn: 'Begynt i arbeid' as AvbrytelseGrunn,
    gjeldendeInnhold: {
        startDato: '2021-08-01',
        sluttDato: '2021-08-01',
    },
};

export const ManglerGodkjenningArbeidsgiverOgDeltakerHarGodkjentMenIkkeMentor: Story = {
    name: 'Mangler Godkjenning Arbeidisgiver og Deltaker har godkjent men manger signerig fra Mentor',
    args: { avtale: manglerGodkjenningArbeidsgiverOgDeltakerHarGodkjentMenIkkeMentor },
};

const manglerGodkjenningDeltakerOgArbeidsgiverOgMentorHarGodkjent = {
    erUfordelt: false,
    statusSomEnum: 'MANGLER_GODKJENNING' as AvtaleStatus,
    annullertTidspunkt: '2021-08-01',
    tiltakstype: 'MIDLERTIDIG_LONNSTILSKUDD' as TiltaksType,
    tilskuddPeriode: [
        {
            beløp: 23324,
            startDato: '2023-05-03',
            sluttDato: '2023-05-31',
            lonnstilskuddProsent: 60,
            id: '370b1f98-9431-4286-98ce-1cc61c824cb2',
            godkjentAvNavIdent: undefined,
            godkjentTidspunkt: undefined,
            enhet: undefined,
            enhetsnavn: undefined,
            avslagsårsaker: new Set([]),
            avslagsforklaring: undefined,
            avslåttAvNavIdent: undefined,
            avslåttTidspunkt: undefined,
            løpenummer: 1,
            status: 'UBEHANDLET' as TilskuddPeriodeStatus,
            refusjonStatus: undefined,
            aktiv: true,
            kanBesluttesFom: '-999999999-01-01',
        },
    ],
    godkjentAvDeltaker: '2021-08-01',
    godkjentAvArbeidsgiver: '20-08-01',
    godkjentAvVeileder: '',
    erGodkjentTaushetserklæringAvMentor: true,
    gjeldendeTilskuddsperiode: {
        beløp: 23324,
        startDato: '2023-05-03',
        sluttDato: '2023-05-31',
        lonnstilskuddProsent: 60,
        id: '370b1f98-9431-4286-98ce-1cc61c824cb2',
        godkjentAvNavIdent: undefined,
        godkjentTidspunkt: undefined,
        enhet: undefined,
        enhetsnavn: undefined,
        avslagsårsaker: new Set([]),
        avslagsforklaring: undefined,
        avslåttAvNavIdent: undefined,
        avslåttTidspunkt: undefined,
        løpenummer: 1,
        status: 'UBEHANDLET' as TilskuddPeriodeStatus,
        refusjonStatus: undefined,
        aktiv: true,
        kanBesluttesFom: '-999999999-01-01',
    },
    avtaleInngått: '2021-08-01',
    erAnnullertEllerAvbrutt: true,
    annullertGrunn: 'annulert grunn',
    avbruttGrunn: 'Begynt i arbeid' as AvbrytelseGrunn,
    gjeldendeInnhold: {
        startDato: '2021-08-01',
        sluttDato: '2021-08-01',
    },
};

export const ManglerGodkjenningDeltakerOgArbeidsgiverOgMentorHarGodkjent: Story = {
    name: ' Mangler Godkjenning Deltaker og Arbeidsgiver og Mentor har godkjent avtalen',
    args: { avtale: manglerGodkjenningDeltakerOgArbeidsgiverOgMentorHarGodkjent },
};

const manglerGodkjenningDeltakerHarGodkjentMenIkkeArbeidsgiverOgMentor = {
    erUfordelt: false,
    statusSomEnum: 'MANGLER_GODKJENNING' as AvtaleStatus,
    annullertTidspunkt: '2021-08-01',
    tiltakstype: 'MENTOR' as TiltaksType,
    tilskuddPeriode: [
        {
            beløp: 23324,
            startDato: '2023-05-03',
            sluttDato: '2023-05-31',
            lonnstilskuddProsent: 60,
            id: '370b1f98-9431-4286-98ce-1cc61c824cb2',
            godkjentAvNavIdent: undefined,
            godkjentTidspunkt: undefined,
            enhet: undefined,
            enhetsnavn: undefined,
            avslagsårsaker: new Set([]),
            avslagsforklaring: undefined,
            avslåttAvNavIdent: undefined,
            avslåttTidspunkt: undefined,
            løpenummer: 1,
            status: 'UBEHANDLET' as TilskuddPeriodeStatus,
            refusjonStatus: undefined,
            aktiv: true,
            kanBesluttesFom: '-999999999-01-01',
        },
    ],
    godkjentAvDeltaker: '2021-08-01',
    godkjentAvArbeidsgiver: '',
    godkjentAvVeileder: '',
    erGodkjentTaushetserklæringAvMentor: false,
    gjeldendeTilskuddsperiode: {
        beløp: 23324,
        startDato: '2023-05-03',
        sluttDato: '2023-05-31',
        lonnstilskuddProsent: 60,
        id: '370b1f98-9431-4286-98ce-1cc61c824cb2',
        godkjentAvNavIdent: undefined,
        godkjentTidspunkt: undefined,
        enhet: undefined,
        enhetsnavn: undefined,
        avslagsårsaker: new Set([]),
        avslagsforklaring: undefined,
        avslåttAvNavIdent: undefined,
        avslåttTidspunkt: undefined,
        løpenummer: 1,
        status: 'UBEHANDLET' as TilskuddPeriodeStatus,
        refusjonStatus: undefined,
        aktiv: true,
        kanBesluttesFom: '-999999999-01-01',
    },
    avtaleInngått: '2021-08-01',
    erAnnullertEllerAvbrutt: true,
    annullertGrunn: 'annulert grunn',
    avbruttGrunn: 'Begynt i arbeid' as AvbrytelseGrunn,
    gjeldendeInnhold: {
        startDato: '2021-08-01',
        sluttDato: '2021-08-01',
    },
};

export const ManglerGodkjenningDeltakerHarGodkjentMenIkkeArbeidsgiverOgMentor: Story = {
    name: ' Mangler Godkjenning Deltaker og Arbeidsgiver og Mentor har godkjent avtalen',
    args: { avtale: manglerGodkjenningDeltakerHarGodkjentMenIkkeArbeidsgiverOgMentor },
};

const manglerGodkjenningDeltakerHarGodkjent = {
    erUfordelt: false,
    statusSomEnum: 'MANGLER_GODKJENNING' as AvtaleStatus,
    annullertTidspunkt: '2021-08-01',
    tiltakstype: 'MIDLERTIDIG_LONNSTILSKUDD' as TiltaksType,
    tilskuddPeriode: [
        {
            beløp: 23324,
            startDato: '2023-05-03',
            sluttDato: '2023-05-31',
            lonnstilskuddProsent: 60,
            id: '370b1f98-9431-4286-98ce-1cc61c824cb2',
            godkjentAvNavIdent: undefined,
            godkjentTidspunkt: undefined,
            enhet: undefined,
            enhetsnavn: undefined,
            avslagsårsaker: new Set([]),
            avslagsforklaring: undefined,
            avslåttAvNavIdent: undefined,
            avslåttTidspunkt: undefined,
            løpenummer: 1,
            status: 'UBEHANDLET' as TilskuddPeriodeStatus,
            refusjonStatus: undefined,
            aktiv: true,
            kanBesluttesFom: '-999999999-01-01',
        },
    ],
    godkjentAvDeltaker: '2021-08-01',
    godkjentAvArbeidsgiver: '',
    godkjentAvVeileder: '',
    gjeldendeTilskuddsperiode: {
        beløp: 23324,
        startDato: '2023-05-03',
        sluttDato: '2023-05-31',
        lonnstilskuddProsent: 60,
        id: '370b1f98-9431-4286-98ce-1cc61c824cb2',
        godkjentAvNavIdent: undefined,
        godkjentTidspunkt: undefined,
        enhet: undefined,
        enhetsnavn: undefined,
        avslagsårsaker: new Set([]),
        avslagsforklaring: undefined,
        avslåttAvNavIdent: undefined,
        avslåttTidspunkt: undefined,
        løpenummer: 1,
        status: 'UBEHANDLET' as TilskuddPeriodeStatus,
        refusjonStatus: undefined,
        aktiv: true,
        kanBesluttesFom: '-999999999-01-01',
    },
    avtaleInngått: '2021-08-01',
    erAnnullertEllerAvbrutt: true,
    annullertGrunn: 'annulert grunn',
    avbruttGrunn: 'Begynt i arbeid' as AvbrytelseGrunn,
    gjeldendeInnhold: {
        startDato: '2021-08-01',
        sluttDato: '2021-08-01',
    },
};

export const ManglerGodkjenningDeltakerHarGodkjent: Story = {
    name: 'Mangler Godkjenning Deltaker har godkjent men manger godkjenning av Arbeidsgiver',
    args: { avtale: manglerGodkjenningDeltakerHarGodkjent },
};

const manglerGodkjenningArbeidsgiverHarGodkjentMenIkkeDeltakerogMentor = {
    erUfordelt: false,
    statusSomEnum: 'MANGLER_GODKJENNING' as AvtaleStatus,
    annullertTidspunkt: '2021-08-01',
    tiltakstype: 'MENTOR' as TiltaksType,
    tilskuddPeriode: [
        {
            beløp: 23324,
            startDato: '2023-05-03',
            sluttDato: '2023-05-31',
            lonnstilskuddProsent: 60,
            id: '370b1f98-9431-4286-98ce-1cc61c824cb2',
            godkjentAvNavIdent: undefined,
            godkjentTidspunkt: undefined,
            enhet: undefined,
            enhetsnavn: undefined,
            avslagsårsaker: new Set([]),
            avslagsforklaring: undefined,
            avslåttAvNavIdent: undefined,
            avslåttTidspunkt: undefined,
            løpenummer: 1,
            status: 'UBEHANDLET' as TilskuddPeriodeStatus,
            refusjonStatus: undefined,
            aktiv: true,
            kanBesluttesFom: '-999999999-01-01',
        },
    ],
    godkjentAvDeltaker: '',
    godkjentAvArbeidsgiver: '2021-08-01',
    godkjentAvVeileder: '',
    erGodkjentTaushetserklæringAvMentor: false,
    gjeldendeTilskuddsperiode: {
        beløp: 23324,
        startDato: '2023-05-03',
        sluttDato: '2023-05-31',
        lonnstilskuddProsent: 60,
        id: '370b1f98-9431-4286-98ce-1cc61c824cb2',
        godkjentAvNavIdent: undefined,
        godkjentTidspunkt: undefined,
        enhet: undefined,
        enhetsnavn: undefined,
        avslagsårsaker: new Set([]),
        avslagsforklaring: undefined,
        avslåttAvNavIdent: undefined,
        avslåttTidspunkt: undefined,
        løpenummer: 1,
        status: 'UBEHANDLET' as TilskuddPeriodeStatus,
        refusjonStatus: undefined,
        aktiv: true,
        kanBesluttesFom: '-999999999-01-01',
    },
    avtaleInngått: '2021-08-01',
    erAnnullertEllerAvbrutt: true,
    annullertGrunn: 'annulert grunn',
    avbruttGrunn: 'Begynt i arbeid' as AvbrytelseGrunn,
    gjeldendeInnhold: {
        startDato: '2021-08-01',
        sluttDato: '2021-08-01',
    },
};

export const ManglerGodkjenningArbeidsgiverHarGodkjentMenIkkeDeltakerogMentor: Story = {
    name: ' Mangler Godkjenning Deltaker og Arbeidsgiver og Mentor har godkjent avtalen',
    args: { avtale: manglerGodkjenningArbeidsgiverHarGodkjentMenIkkeDeltakerogMentor },
};

const manglerGodkjenningArbeidsgiverHarGodkjent = {
    erUfordelt: false,
    statusSomEnum: 'MANGLER_GODKJENNING' as AvtaleStatus,
    annullertTidspunkt: '2021-08-01',
    tiltakstype: 'MIDLERTIDIG_LONNSTILSKUDD' as TiltaksType,
    tilskuddPeriode: [
        {
            beløp: 23324,
            startDato: '2023-05-03',
            sluttDato: '2023-05-31',
            lonnstilskuddProsent: 60,
            id: '370b1f98-9431-4286-98ce-1cc61c824cb2',
            godkjentAvNavIdent: undefined,
            godkjentTidspunkt: undefined,
            enhet: undefined,
            enhetsnavn: undefined,
            avslagsårsaker: new Set([]),
            avslagsforklaring: undefined,
            avslåttAvNavIdent: undefined,
            avslåttTidspunkt: undefined,
            løpenummer: 1,
            status: 'UBEHANDLET' as TilskuddPeriodeStatus,
            refusjonStatus: undefined,
            aktiv: true,
            kanBesluttesFom: '-999999999-01-01',
        },
    ],
    godkjentAvDeltaker: '',
    godkjentAvArbeidsgiver: '2024-05-10',
    godkjentAvVeileder: '',
    gjeldendeTilskuddsperiode: {
        beløp: 23324,
        startDato: '2023-05-03',
        sluttDato: '2023-05-31',
        lonnstilskuddProsent: 60,
        id: '370b1f98-9431-4286-98ce-1cc61c824cb2',
        godkjentAvNavIdent: undefined,
        godkjentTidspunkt: undefined,
        enhet: undefined,
        enhetsnavn: undefined,
        avslagsårsaker: new Set([]),
        avslagsforklaring: undefined,
        avslåttAvNavIdent: undefined,
        avslåttTidspunkt: undefined,
        løpenummer: 1,
        status: 'UBEHANDLET' as TilskuddPeriodeStatus,
        refusjonStatus: undefined,
        aktiv: true,
        kanBesluttesFom: '-999999999-01-01',
    },
    avtaleInngått: '2021-08-01',
    erAnnullertEllerAvbrutt: true,
    annullertGrunn: 'annulert grunn',
    avbruttGrunn: 'Begynt i arbeid' as AvbrytelseGrunn,
    gjeldendeInnhold: {
        startDato: '2021-08-01',
        sluttDato: '2021-08-01',
    },
};

export const ManglerGodkjenningArbeidsgiverHarGodkjent: Story = {
    name: 'Mangler Godkjenning Arbeidisgiver har godkjent men manger godkjenning av Deltakeren',
    args: { avtale: manglerGodkjenningArbeidsgiverHarGodkjent },
};

const manglerGodkjenningArbeidsgiverOgDeltakerOgMentorHarIkkeGodkjent = {
    erUfordelt: false,
    statusSomEnum: 'MANGLER_GODKJENNING' as AvtaleStatus,
    annullertTidspunkt: '2021-08-01',
    tiltakstype: 'MENTOR' as TiltaksType,
    tilskuddPeriode: [
        {
            beløp: 23324,
            startDato: '2023-05-03',
            sluttDato: '2023-05-31',
            lonnstilskuddProsent: 60,
            id: '370b1f98-9431-4286-98ce-1cc61c824cb2',
            godkjentAvNavIdent: undefined,
            godkjentTidspunkt: undefined,
            enhet: undefined,
            enhetsnavn: undefined,
            avslagsårsaker: new Set([]),
            avslagsforklaring: undefined,
            avslåttAvNavIdent: undefined,
            avslåttTidspunkt: undefined,
            løpenummer: 1,
            status: 'UBEHANDLET' as TilskuddPeriodeStatus,
            refusjonStatus: undefined,
            aktiv: true,
            kanBesluttesFom: '-999999999-01-01',
        },
    ],
    godkjentAvDeltaker: '',
    godkjentAvArbeidsgiver: '',
    godkjentAvVeileder: '',
    erGodkjentTaushetserklæringAvMentor: false,
    gjeldendeTilskuddsperiode: {
        beløp: 23324,
        startDato: '2023-05-03',
        sluttDato: '2023-05-31',
        lonnstilskuddProsent: 60,
        id: '370b1f98-9431-4286-98ce-1cc61c824cb2',
        godkjentAvNavIdent: undefined,
        godkjentTidspunkt: undefined,
        enhet: undefined,
        enhetsnavn: undefined,
        avslagsårsaker: new Set([]),
        avslagsforklaring: undefined,
        avslåttAvNavIdent: undefined,
        avslåttTidspunkt: undefined,
        løpenummer: 1,
        status: 'UBEHANDLET' as TilskuddPeriodeStatus,
        refusjonStatus: undefined,
        aktiv: true,
        kanBesluttesFom: '-999999999-01-01',
    },
    avtaleInngått: '2021-08-01',
    erAnnullertEllerAvbrutt: true,
    annullertGrunn: 'annulert grunn',
    avbruttGrunn: 'Begynt i arbeid' as AvbrytelseGrunn,
    gjeldendeInnhold: {
        startDato: '2021-08-01',
        sluttDato: '2021-08-01',
    },
};

export const ManglerGodkjenningArbeidsgiverOgDeltakerOgMentorHarIkkeGodkjent: Story = {
    name: 'Mangler Godkjenning Arbeidisgiver har godkjent men manger godkjenning av Deltakeren og Veileder',
    args: { avtale: manglerGodkjenningArbeidsgiverOgDeltakerOgMentorHarIkkeGodkjent },
};

const manglerGodkjenningArbeidsgiverOgDeltakerHarIkkeGodkjent = {
    erUfordelt: false,
    statusSomEnum: 'MANGLER_GODKJENNING' as AvtaleStatus,
    annullertTidspunkt: '2021-08-01',
    tiltakstype: 'MIDLERTIDIG_LONNSTILSKUDD' as TiltaksType,
    tilskuddPeriode: [
        {
            beløp: 23324,
            startDato: '2023-05-03',
            sluttDato: '2023-05-31',
            lonnstilskuddProsent: 60,
            id: '370b1f98-9431-4286-98ce-1cc61c824cb2',
            godkjentAvNavIdent: undefined,
            godkjentTidspunkt: undefined,
            enhet: undefined,
            enhetsnavn: undefined,
            avslagsårsaker: new Set([]),
            avslagsforklaring: undefined,
            avslåttAvNavIdent: undefined,
            avslåttTidspunkt: undefined,
            løpenummer: 1,
            status: 'UBEHANDLET' as TilskuddPeriodeStatus,
            refusjonStatus: undefined,
            aktiv: true,
            kanBesluttesFom: '-999999999-01-01',
        },
    ],
    godkjentAvDeltaker: '',
    godkjentAvArbeidsgiver: '',
    godkjentAvVeileder: '',
    gjeldendeTilskuddsperiode: {
        beløp: 23324,
        startDato: '2023-05-03',
        sluttDato: '2023-05-31',
        lonnstilskuddProsent: 60,
        id: '370b1f98-9431-4286-98ce-1cc61c824cb2',
        godkjentAvNavIdent: undefined,
        godkjentTidspunkt: undefined,
        enhet: undefined,
        enhetsnavn: undefined,
        avslagsårsaker: new Set([]),
        avslagsforklaring: undefined,
        avslåttAvNavIdent: undefined,
        avslåttTidspunkt: undefined,
        løpenummer: 1,
        status: 'UBEHANDLET' as TilskuddPeriodeStatus,
        refusjonStatus: undefined,
        aktiv: true,
        kanBesluttesFom: '-999999999-01-01',
    },
    avtaleInngått: '2021-08-01',
    erAnnullertEllerAvbrutt: true,
    annullertGrunn: 'annulert grunn',
    avbruttGrunn: 'Begynt i arbeid' as AvbrytelseGrunn,
    gjeldendeInnhold: {
        startDato: '2021-08-01',
        sluttDato: '2021-08-01',
    },
};

export const ManglerGodkjenningArbeidsgiverOgDeltakerHarIkkeGodkjent: Story = {
    name: 'Mangler Godkjenning Arbeidisgiver har godkjent men manger godkjenning av Deltakeren og Veileder',
    args: { avtale: manglerGodkjenningArbeidsgiverOgDeltakerHarIkkeGodkjent },
};

const klarForOppstartUteforArena = {
    erUfordelt: false,
    statusSomEnum: 'KLAR_FOR_OPPSTART' as AvtaleStatus,
    annullertTidspunkt: '2021-08-01',
    tiltakstype: 'MIDLERTIDIG_LONNSTILSKUDD' as TiltaksType,
    tilskuddPeriode: [
        {
            beløp: 23324,
            startDato: '2023-05-03',
            sluttDato: '2023-05-31',
            lonnstilskuddProsent: 60,
            id: '370b1f98-9431-4286-98ce-1cc61c824cb2',
            godkjentAvNavIdent: undefined,
            godkjentTidspunkt: undefined,
            enhet: undefined,
            enhetsnavn: undefined,
            avslagsårsaker: new Set([]),
            avslagsforklaring: undefined,
            avslåttAvNavIdent: undefined,
            avslåttTidspunkt: undefined,
            løpenummer: 1,
            status: 'UBEHANDLET' as TilskuddPeriodeStatus,
            refusjonStatus: undefined,
            aktiv: true,
            kanBesluttesFom: '-999999999-01-01',
        },
    ],
    godkjentAvDeltaker: '2021-08-01',
    godkjentAvArbeidsgiver: '20-08-01',
    godkjentAvVeileder: '2021-08-01',
    gjeldendeTilskuddsperiode: {
        beløp: 23324,
        startDato: '2023-05-03',
        sluttDato: '2023-05-31',
        lonnstilskuddProsent: 60,
        id: '370b1f98-9431-4286-98ce-1cc61c824cb2',
        godkjentAvNavIdent: undefined,
        godkjentTidspunkt: undefined,
        enhet: undefined,
        enhetsnavn: undefined,
        avslagsårsaker: new Set([]),
        avslagsforklaring: undefined,
        avslåttAvNavIdent: undefined,
        avslåttTidspunkt: undefined,
        løpenummer: 1,
        status: 'UBEHANDLET' as TilskuddPeriodeStatus,
        refusjonStatus: undefined,
        aktiv: true,
        kanBesluttesFom: '-999999999-01-01',
    },
    avtaleInngått: '2021-08-01',
    erAnnullertEllerAvbrutt: true,
    annullertGrunn: 'annulert grunn',
    avbruttGrunn: 'Begynt i arbeid' as AvbrytelseGrunn,
    gjeldendeInnhold: {
        startDato: '2021-08-01',
        sluttDato: '2021-08-01',
    },
};

export const KlarForOppstartUteforArena: Story = {
    name: 'Klar For Oppstart',
    args: { avtale: klarForOppstartUteforArena },
};

const klarForOppstartArena = {
    erUfordelt: false,
    statusSomEnum: 'KLAR_FOR_OPPSTART' as AvtaleStatus,
    annullertTidspunkt: '2021-08-01',
    tiltakstype: 'INKLUDERINGSTILSKUDD' as TiltaksType,
    tilskuddPeriode: [
        {
            beløp: 23324,
            startDato: '2023-05-03',
            sluttDato: '2023-05-31',
            lonnstilskuddProsent: 60,
            id: '370b1f98-9431-4286-98ce-1cc61c824cb2',
            godkjentAvNavIdent: undefined,
            godkjentTidspunkt: undefined,
            enhet: undefined,
            enhetsnavn: undefined,
            avslagsårsaker: new Set([]),
            avslagsforklaring: undefined,
            avslåttAvNavIdent: undefined,
            avslåttTidspunkt: undefined,
            løpenummer: 1,
            status: 'UBEHANDLET' as TilskuddPeriodeStatus,
            refusjonStatus: undefined,
            aktiv: true,
            kanBesluttesFom: '-999999999-01-01',
        },
    ],
    godkjentAvDeltaker: '2021-08-01',
    godkjentAvArbeidsgiver: '20-08-01',
    godkjentAvVeileder: '2021-08-01',
    gjeldendeTilskuddsperiode: {
        beløp: 23324,
        startDato: '2023-05-03',
        sluttDato: '2023-05-31',
        lonnstilskuddProsent: 60,
        id: '370b1f98-9431-4286-98ce-1cc61c824cb2',
        godkjentAvNavIdent: undefined,
        godkjentTidspunkt: undefined,
        enhet: undefined,
        enhetsnavn: undefined,
        avslagsårsaker: new Set([]),
        avslagsforklaring: undefined,
        avslåttAvNavIdent: undefined,
        avslåttTidspunkt: undefined,
        løpenummer: 1,
        status: 'UBEHANDLET' as TilskuddPeriodeStatus,
        refusjonStatus: undefined,
        aktiv: true,
        kanBesluttesFom: '-999999999-01-01',
    },
    avtaleInngått: '2021-08-01',
    erAnnullertEllerAvbrutt: true,
    annullertGrunn: 'annulert grunn',
    avbruttGrunn: 'Begynt i arbeid' as AvbrytelseGrunn,
    gjeldendeInnhold: {
        startDato: '2021-08-01',
        sluttDato: '2021-08-01',
    },
};

export const KlarForOppstartArena: Story = {
    name: 'Klar For Oppstart',
    args: { avtale: klarForOppstartArena },
};

const gjennomføres = {
    erUfordelt: false,
    statusSomEnum: 'GJENNOMFØRES' as AvtaleStatus,
    annullertTidspunkt: '2021-08-01',
    tiltakstype: 'MIDLERTIDIG_LONNSTILSKUDD' as TiltaksType,
    tilskuddPeriode: [
        {
            beløp: 23324,
            startDato: '2023-05-03',
            sluttDato: '2023-05-31',
            lonnstilskuddProsent: 60,
            id: '370b1f98-9431-4286-98ce-1cc61c824cb2',
            godkjentAvNavIdent: undefined,
            godkjentTidspunkt: undefined,
            enhet: undefined,
            enhetsnavn: undefined,
            avslagsårsaker: new Set([]),
            avslagsforklaring: undefined,
            avslåttAvNavIdent: undefined,
            avslåttTidspunkt: undefined,
            løpenummer: 1,
            status: 'UBEHANDLET' as TilskuddPeriodeStatus,
            refusjonStatus: undefined,
            aktiv: true,
            kanBesluttesFom: '-999999999-01-01',
        },
    ],
    godkjentAvDeltaker: '2021-08-01',
    godkjentAvArbeidsgiver: '20-08-01',
    godkjentAvVeileder: '2021-08-01',
    gjeldendeTilskuddsperiode: {
        beløp: 23324,
        startDato: '2023-05-03',
        sluttDato: '2023-05-31',
        lonnstilskuddProsent: 60,
        id: '370b1f98-9431-4286-98ce-1cc61c824cb2',
        godkjentAvNavIdent: undefined,
        godkjentTidspunkt: undefined,
        enhet: undefined,
        enhetsnavn: undefined,
        avslagsårsaker: new Set([]),
        avslagsforklaring: undefined,
        avslåttAvNavIdent: undefined,
        avslåttTidspunkt: undefined,
        løpenummer: 1,
        status: 'UBEHANDLET' as TilskuddPeriodeStatus,
        refusjonStatus: undefined,
        aktiv: true,
        kanBesluttesFom: '-999999999-01-01',
    },
    avtaleInngått: '2021-08-01',
    erAnnullertEllerAvbrutt: true,
    annullertGrunn: 'annulert grunn',
    avbruttGrunn: 'Begynt i arbeid' as AvbrytelseGrunn,
    gjeldendeInnhold: {
        startDato: '2021-08-01',
        sluttDato: '2021-08-01',
    },
};

export const Gjennomføres: Story = {
    name: 'Gjennomføres',
    args: { avtale: gjennomføres },
};

const avsluttet = {
    erUfordelt: false,
    statusSomEnum: 'AVSLUTTET' as AvtaleStatus,
    annullertTidspunkt: '2021-08-01',
    tiltakstype: 'MIDLERTIDIG_LONNSTILSKUDD' as TiltaksType,
    tilskuddPeriode: [
        {
            beløp: 23324,
            startDato: '2023-05-03',
            sluttDato: '2023-05-31',
            lonnstilskuddProsent: 60,
            id: '370b1f98-9431-4286-98ce-1cc61c824cb2',
            godkjentAvNavIdent: undefined,
            godkjentTidspunkt: undefined,
            enhet: undefined,
            enhetsnavn: undefined,
            avslagsårsaker: new Set([]),
            avslagsforklaring: undefined,
            avslåttAvNavIdent: undefined,
            avslåttTidspunkt: undefined,
            løpenummer: 1,
            status: 'UBEHANDLET' as TilskuddPeriodeStatus,
            refusjonStatus: undefined,
            aktiv: true,
            kanBesluttesFom: '-999999999-01-01',
        },
    ],
    godkjentAvDeltaker: '2021-08-01',
    godkjentAvArbeidsgiver: '20-08-01',
    godkjentAvVeileder: '2021-08-01',
    gjeldendeTilskuddsperiode: {
        beløp: 23324,
        startDato: '2023-05-03',
        sluttDato: '2023-05-31',
        lonnstilskuddProsent: 60,
        id: '370b1f98-9431-4286-98ce-1cc61c824cb2',
        godkjentAvNavIdent: undefined,
        godkjentTidspunkt: undefined,
        enhet: undefined,
        enhetsnavn: undefined,
        avslagsårsaker: new Set([]),
        avslagsforklaring: undefined,
        avslåttAvNavIdent: undefined,
        avslåttTidspunkt: undefined,
        løpenummer: 1,
        status: 'UBEHANDLET' as TilskuddPeriodeStatus,
        refusjonStatus: undefined,
        aktiv: true,
        kanBesluttesFom: '-999999999-01-01',
    },
    avtaleInngått: '2021-08-01',
    erAnnullertEllerAvbrutt: true,
    annullertGrunn: 'annulert grunn',
    avbruttGrunn: 'Begynt i arbeid' as AvbrytelseGrunn,
    gjeldendeInnhold: {
        startDato: '2021-08-01',
        sluttDato: '2021-08-01',
    },
};

export const Avsluttet: Story = {
    name: 'Avsluttet',
    args: { avtale: avsluttet },
};