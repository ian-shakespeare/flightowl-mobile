import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowRight, faStar } from "@fortawesome/free-solid-svg-icons";
import {
    StyledScrollView,
    StyledText,
    StyledView,
} from "../components/StyledElements";
import carriers from "../data/carriers.json";

const SearchPage = () => {
    const results = [
        {
            type: "flight-offer",
            id: "1",
            source: "GDS",
            instantTicketingRequired: false,
            nonHomogeneous: false,
            oneWay: false,
            lastTicketingDate: "2023-03-20",
            numberOfBookableSeats: 9,
            itineraries: [
                {
                    duration: "PT16H55M",
                    segments: [
                        {
                            departure: {
                                iataCode: "NRT",
                                terminal: "1",
                                at: "2023-06-20T13:55:00",
                            },
                            arrival: {
                                iataCode: "ICN",
                                terminal: "2",
                                at: "2023-06-20T16:30:00",
                            },
                            carrierCode: "KE",
                            number: "704",
                            aircraft: {
                                code: "333",
                            },
                            operating: {
                                carrierCode: "KE",
                            },
                            duration: "PT2H35M",
                            id: "128",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                        {
                            departure: {
                                iataCode: "ICN",
                                terminal: "2",
                                at: "2023-06-20T19:40:00",
                            },
                            arrival: {
                                iataCode: "LAX",
                                terminal: "B",
                                at: "2023-06-20T14:50:00",
                            },
                            carrierCode: "KE",
                            number: "11",
                            aircraft: {
                                code: "74H",
                            },
                            operating: {
                                carrierCode: "KE",
                            },
                            duration: "PT11H10M",
                            id: "129",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                    ],
                },
            ],
            price: {
                currency: "USD",
                total: "559.15",
                base: "140.00",
                fees: [
                    {
                        amount: "0.00",
                        type: "SUPPLIER",
                    },
                    {
                        amount: "0.00",
                        type: "TICKETING",
                    },
                ],
                grandTotal: "559.15",
            },
            pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
            },
            validatingAirlineCodes: ["KE"],
            travelerPricings: [
                {
                    travelerId: "1",
                    fareOption: "STANDARD",
                    travelerType: "ADULT",
                    price: {
                        currency: "USD",
                        total: "559.15",
                        base: "140.00",
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "128",
                            cabin: "ECONOMY",
                            fareBasis: "QNE80BM4",
                            class: "Q",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                        {
                            segmentId: "129",
                            cabin: "ECONOMY",
                            fareBasis: "QNE80BM4",
                            class: "Q",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                    ],
                },
            ],
        },
        {
            type: "flight-offer",
            id: "2",
            source: "GDS",
            instantTicketingRequired: false,
            nonHomogeneous: false,
            oneWay: false,
            lastTicketingDate: "2023-03-20",
            numberOfBookableSeats: 9,
            itineraries: [
                {
                    duration: "PT35H45M",
                    segments: [
                        {
                            departure: {
                                iataCode: "NRT",
                                terminal: "1",
                                at: "2023-06-20T13:55:00",
                            },
                            arrival: {
                                iataCode: "ICN",
                                terminal: "2",
                                at: "2023-06-20T16:30:00",
                            },
                            carrierCode: "KE",
                            number: "704",
                            aircraft: {
                                code: "333",
                            },
                            operating: {
                                carrierCode: "KE",
                            },
                            duration: "PT2H35M",
                            id: "116",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                        {
                            departure: {
                                iataCode: "ICN",
                                terminal: "2",
                                at: "2023-06-21T14:30:00",
                            },
                            arrival: {
                                iataCode: "LAX",
                                terminal: "B",
                                at: "2023-06-21T09:40:00",
                            },
                            carrierCode: "KE",
                            number: "17",
                            aircraft: {
                                code: "388",
                            },
                            operating: {
                                carrierCode: "KE",
                            },
                            duration: "PT11H10M",
                            id: "117",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                    ],
                },
            ],
            price: {
                currency: "USD",
                total: "559.15",
                base: "140.00",
                fees: [
                    {
                        amount: "0.00",
                        type: "SUPPLIER",
                    },
                    {
                        amount: "0.00",
                        type: "TICKETING",
                    },
                ],
                grandTotal: "559.15",
            },
            pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
            },
            validatingAirlineCodes: ["KE"],
            travelerPricings: [
                {
                    travelerId: "1",
                    fareOption: "STANDARD",
                    travelerType: "ADULT",
                    price: {
                        currency: "USD",
                        total: "559.15",
                        base: "140.00",
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "116",
                            cabin: "ECONOMY",
                            fareBasis: "QNE80BM4",
                            class: "Q",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                        {
                            segmentId: "117",
                            cabin: "ECONOMY",
                            fareBasis: "QNE80BM4",
                            class: "Q",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                    ],
                },
            ],
        },
        {
            type: "flight-offer",
            id: "3",
            source: "GDS",
            instantTicketingRequired: false,
            nonHomogeneous: false,
            oneWay: false,
            lastTicketingDate: "2023-03-20",
            numberOfBookableSeats: 9,
            itineraries: [
                {
                    duration: "PT15H10M",
                    segments: [
                        {
                            departure: {
                                iataCode: "NRT",
                                terminal: "1",
                                at: "2023-06-20T16:55:00",
                            },
                            arrival: {
                                iataCode: "YVR",
                                terminal: "M",
                                at: "2023-06-20T09:50:00",
                            },
                            carrierCode: "AC",
                            number: "4",
                            aircraft: {
                                code: "77W",
                            },
                            operating: {
                                carrierCode: "AC",
                            },
                            duration: "PT8H55M",
                            id: "27",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                        {
                            departure: {
                                iataCode: "YVR",
                                terminal: "M",
                                at: "2023-06-20T13:00:00",
                            },
                            arrival: {
                                iataCode: "LAX",
                                terminal: "6",
                                at: "2023-06-20T16:05:00",
                            },
                            carrierCode: "AC",
                            number: "556",
                            aircraft: {
                                code: "7M8",
                            },
                            operating: {
                                carrierCode: "AC",
                            },
                            duration: "PT3H5M",
                            id: "28",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                    ],
                },
            ],
            price: {
                currency: "USD",
                total: "637.35",
                base: "213.00",
                fees: [
                    {
                        amount: "0.00",
                        type: "SUPPLIER",
                    },
                    {
                        amount: "0.00",
                        type: "TICKETING",
                    },
                ],
                grandTotal: "637.35",
            },
            pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
            },
            validatingAirlineCodes: ["AC"],
            travelerPricings: [
                {
                    travelerId: "1",
                    fareOption: "STANDARD",
                    travelerType: "ADULT",
                    price: {
                        currency: "USD",
                        total: "637.35",
                        base: "213.00",
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "27",
                            cabin: "ECONOMY",
                            fareBasis: "SKVQ23BA",
                            brandedFare: "BASIC",
                            class: "S",
                            includedCheckedBags: {
                                quantity: 1,
                            },
                        },
                        {
                            segmentId: "28",
                            cabin: "ECONOMY",
                            fareBasis: "SKVQ23BA",
                            brandedFare: "BASIC",
                            class: "S",
                            includedCheckedBags: {
                                quantity: 1,
                            },
                        },
                    ],
                },
            ],
        },
        {
            type: "flight-offer",
            id: "4",
            source: "GDS",
            instantTicketingRequired: false,
            nonHomogeneous: false,
            oneWay: false,
            lastTicketingDate: "2023-03-20",
            numberOfBookableSeats: 9,
            itineraries: [
                {
                    duration: "PT20H45M",
                    segments: [
                        {
                            departure: {
                                iataCode: "NRT",
                                terminal: "1",
                                at: "2023-06-20T16:55:00",
                            },
                            arrival: {
                                iataCode: "YVR",
                                terminal: "M",
                                at: "2023-06-20T09:50:00",
                            },
                            carrierCode: "AC",
                            number: "4",
                            aircraft: {
                                code: "77W",
                            },
                            operating: {
                                carrierCode: "AC",
                            },
                            duration: "PT8H55M",
                            id: "108",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                        {
                            departure: {
                                iataCode: "YVR",
                                terminal: "M",
                                at: "2023-06-20T18:35:00",
                            },
                            arrival: {
                                iataCode: "LAX",
                                terminal: "6",
                                at: "2023-06-20T21:40:00",
                            },
                            carrierCode: "AC",
                            number: "558",
                            aircraft: {
                                code: "7M8",
                            },
                            operating: {
                                carrierCode: "AC",
                            },
                            duration: "PT3H5M",
                            id: "109",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                    ],
                },
            ],
            price: {
                currency: "USD",
                total: "637.35",
                base: "213.00",
                fees: [
                    {
                        amount: "0.00",
                        type: "SUPPLIER",
                    },
                    {
                        amount: "0.00",
                        type: "TICKETING",
                    },
                ],
                grandTotal: "637.35",
            },
            pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
            },
            validatingAirlineCodes: ["AC"],
            travelerPricings: [
                {
                    travelerId: "1",
                    fareOption: "STANDARD",
                    travelerType: "ADULT",
                    price: {
                        currency: "USD",
                        total: "637.35",
                        base: "213.00",
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "108",
                            cabin: "ECONOMY",
                            fareBasis: "SKVQ23BA",
                            brandedFare: "BASIC",
                            class: "S",
                            includedCheckedBags: {
                                quantity: 1,
                            },
                        },
                        {
                            segmentId: "109",
                            cabin: "ECONOMY",
                            fareBasis: "SKVQ23BA",
                            brandedFare: "BASIC",
                            class: "S",
                            includedCheckedBags: {
                                quantity: 1,
                            },
                        },
                    ],
                },
            ],
        },
        {
            type: "flight-offer",
            id: "5",
            source: "GDS",
            instantTicketingRequired: false,
            nonHomogeneous: false,
            oneWay: false,
            lastTicketingDate: "2023-03-20",
            numberOfBookableSeats: 9,
            itineraries: [
                {
                    duration: "PT22H20M",
                    segments: [
                        {
                            departure: {
                                iataCode: "NRT",
                                terminal: "1",
                                at: "2023-06-20T16:55:00",
                            },
                            arrival: {
                                iataCode: "YVR",
                                terminal: "M",
                                at: "2023-06-20T09:50:00",
                            },
                            carrierCode: "AC",
                            number: "4",
                            aircraft: {
                                code: "77W",
                            },
                            operating: {
                                carrierCode: "AC",
                            },
                            duration: "PT8H55M",
                            id: "51",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                        {
                            departure: {
                                iataCode: "YVR",
                                terminal: "M",
                                at: "2023-06-20T20:10:00",
                            },
                            arrival: {
                                iataCode: "LAX",
                                terminal: "6",
                                at: "2023-06-20T23:15:00",
                            },
                            carrierCode: "AC",
                            number: "560",
                            aircraft: {
                                code: "7M8",
                            },
                            operating: {
                                carrierCode: "AC",
                            },
                            duration: "PT3H5M",
                            id: "52",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                    ],
                },
            ],
            price: {
                currency: "USD",
                total: "637.35",
                base: "213.00",
                fees: [
                    {
                        amount: "0.00",
                        type: "SUPPLIER",
                    },
                    {
                        amount: "0.00",
                        type: "TICKETING",
                    },
                ],
                grandTotal: "637.35",
            },
            pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
            },
            validatingAirlineCodes: ["AC"],
            travelerPricings: [
                {
                    travelerId: "1",
                    fareOption: "STANDARD",
                    travelerType: "ADULT",
                    price: {
                        currency: "USD",
                        total: "637.35",
                        base: "213.00",
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "51",
                            cabin: "ECONOMY",
                            fareBasis: "SKVQ23BA",
                            brandedFare: "BASIC",
                            class: "S",
                            includedCheckedBags: {
                                quantity: 1,
                            },
                        },
                        {
                            segmentId: "52",
                            cabin: "ECONOMY",
                            fareBasis: "SKVQ23BA",
                            brandedFare: "BASIC",
                            class: "S",
                            includedCheckedBags: {
                                quantity: 1,
                            },
                        },
                    ],
                },
            ],
        },
        {
            type: "flight-offer",
            id: "6",
            source: "GDS",
            instantTicketingRequired: false,
            nonHomogeneous: false,
            oneWay: false,
            lastTicketingDate: "2023-03-20",
            numberOfBookableSeats: 9,
            itineraries: [
                {
                    duration: "PT32H20M",
                    segments: [
                        {
                            departure: {
                                iataCode: "NRT",
                                terminal: "1",
                                at: "2023-06-20T16:55:00",
                            },
                            arrival: {
                                iataCode: "YVR",
                                terminal: "M",
                                at: "2023-06-20T09:50:00",
                            },
                            carrierCode: "AC",
                            number: "4",
                            aircraft: {
                                code: "77W",
                            },
                            operating: {
                                carrierCode: "AC",
                            },
                            duration: "PT8H55M",
                            id: "55",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                        {
                            departure: {
                                iataCode: "YVR",
                                terminal: "M",
                                at: "2023-06-21T06:10:00",
                            },
                            arrival: {
                                iataCode: "LAX",
                                terminal: "6",
                                at: "2023-06-21T09:15:00",
                            },
                            carrierCode: "AC",
                            number: "550",
                            aircraft: {
                                code: "7M8",
                            },
                            operating: {
                                carrierCode: "AC",
                            },
                            duration: "PT3H5M",
                            id: "56",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                    ],
                },
            ],
            price: {
                currency: "USD",
                total: "637.35",
                base: "213.00",
                fees: [
                    {
                        amount: "0.00",
                        type: "SUPPLIER",
                    },
                    {
                        amount: "0.00",
                        type: "TICKETING",
                    },
                ],
                grandTotal: "637.35",
            },
            pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
            },
            validatingAirlineCodes: ["AC"],
            travelerPricings: [
                {
                    travelerId: "1",
                    fareOption: "STANDARD",
                    travelerType: "ADULT",
                    price: {
                        currency: "USD",
                        total: "637.35",
                        base: "213.00",
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "55",
                            cabin: "ECONOMY",
                            fareBasis: "SKVQ23BA",
                            brandedFare: "BASIC",
                            class: "S",
                            includedCheckedBags: {
                                quantity: 1,
                            },
                        },
                        {
                            segmentId: "56",
                            cabin: "ECONOMY",
                            fareBasis: "SKVQ23BA",
                            brandedFare: "BASIC",
                            class: "S",
                            includedCheckedBags: {
                                quantity: 1,
                            },
                        },
                    ],
                },
            ],
        },
        {
            type: "flight-offer",
            id: "7",
            source: "GDS",
            instantTicketingRequired: false,
            nonHomogeneous: false,
            oneWay: false,
            lastTicketingDate: "2023-03-20",
            numberOfBookableSeats: 9,
            itineraries: [
                {
                    duration: "PT34H35M",
                    segments: [
                        {
                            departure: {
                                iataCode: "NRT",
                                terminal: "1",
                                at: "2023-06-20T16:55:00",
                            },
                            arrival: {
                                iataCode: "YVR",
                                terminal: "M",
                                at: "2023-06-20T09:50:00",
                            },
                            carrierCode: "AC",
                            number: "4",
                            aircraft: {
                                code: "77W",
                            },
                            operating: {
                                carrierCode: "AC",
                            },
                            duration: "PT8H55M",
                            id: "93",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                        {
                            departure: {
                                iataCode: "YVR",
                                terminal: "M",
                                at: "2023-06-21T08:25:00",
                            },
                            arrival: {
                                iataCode: "LAX",
                                terminal: "6",
                                at: "2023-06-21T11:30:00",
                            },
                            carrierCode: "AC",
                            number: "552",
                            aircraft: {
                                code: "7M8",
                            },
                            operating: {
                                carrierCode: "AC",
                            },
                            duration: "PT3H5M",
                            id: "94",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                    ],
                },
            ],
            price: {
                currency: "USD",
                total: "637.35",
                base: "213.00",
                fees: [
                    {
                        amount: "0.00",
                        type: "SUPPLIER",
                    },
                    {
                        amount: "0.00",
                        type: "TICKETING",
                    },
                ],
                grandTotal: "637.35",
            },
            pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
            },
            validatingAirlineCodes: ["AC"],
            travelerPricings: [
                {
                    travelerId: "1",
                    fareOption: "STANDARD",
                    travelerType: "ADULT",
                    price: {
                        currency: "USD",
                        total: "637.35",
                        base: "213.00",
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "93",
                            cabin: "ECONOMY",
                            fareBasis: "SKVQ23BA",
                            brandedFare: "BASIC",
                            class: "S",
                            includedCheckedBags: {
                                quantity: 1,
                            },
                        },
                        {
                            segmentId: "94",
                            cabin: "ECONOMY",
                            fareBasis: "SKVQ23BA",
                            brandedFare: "BASIC",
                            class: "S",
                            includedCheckedBags: {
                                quantity: 1,
                            },
                        },
                    ],
                },
            ],
        },
        {
            type: "flight-offer",
            id: "8",
            source: "GDS",
            instantTicketingRequired: false,
            nonHomogeneous: false,
            oneWay: false,
            lastTicketingDate: "2023-03-20",
            numberOfBookableSeats: 9,
            itineraries: [
                {
                    duration: "PT31H30M",
                    segments: [
                        {
                            departure: {
                                iataCode: "NRT",
                                terminal: "2",
                                at: "2023-06-20T21:25:00",
                            },
                            arrival: {
                                iataCode: "NAN",
                                at: "2023-06-21T09:05:00",
                            },
                            carrierCode: "FJ",
                            number: "350",
                            aircraft: {
                                code: "332",
                            },
                            operating: {
                                carrierCode: "FJ",
                            },
                            duration: "PT8H40M",
                            id: "81",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                        {
                            departure: {
                                iataCode: "NAN",
                                at: "2023-06-21T21:40:00",
                            },
                            arrival: {
                                iataCode: "LAX",
                                terminal: "B",
                                at: "2023-06-21T12:55:00",
                            },
                            carrierCode: "FJ",
                            number: "810",
                            aircraft: {
                                code: "359",
                            },
                            operating: {
                                carrierCode: "FJ",
                            },
                            duration: "PT10H15M",
                            id: "82",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                    ],
                },
            ],
            price: {
                currency: "USD",
                total: "681.65",
                base: "608.00",
                fees: [
                    {
                        amount: "0.00",
                        type: "SUPPLIER",
                    },
                    {
                        amount: "0.00",
                        type: "TICKETING",
                    },
                ],
                grandTotal: "681.65",
                additionalServices: [
                    {
                        amount: "98.40",
                        type: "CHECKED_BAGS",
                    },
                ],
            },
            pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: false,
            },
            validatingAirlineCodes: ["FJ"],
            travelerPricings: [
                {
                    travelerId: "1",
                    fareOption: "STANDARD",
                    travelerType: "ADULT",
                    price: {
                        currency: "USD",
                        total: "681.65",
                        base: "608.00",
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "81",
                            cabin: "ECONOMY",
                            fareBasis: "NLTJPF01",
                            brandedFare: "LIT",
                            class: "N",
                            includedCheckedBags: {
                                quantity: 0,
                            },
                        },
                        {
                            segmentId: "82",
                            cabin: "ECONOMY",
                            fareBasis: "VLTFJUD",
                            brandedFare: "LIT",
                            class: "V",
                            includedCheckedBags: {
                                quantity: 0,
                            },
                        },
                    ],
                },
            ],
        },
        {
            type: "flight-offer",
            id: "9",
            source: "GDS",
            instantTicketingRequired: false,
            nonHomogeneous: false,
            oneWay: false,
            lastTicketingDate: "2023-06-20",
            numberOfBookableSeats: 9,
            itineraries: [
                {
                    duration: "PT21H50M",
                    segments: [
                        {
                            departure: {
                                iataCode: "NRT",
                                terminal: "2",
                                at: "2023-06-20T13:40:00",
                            },
                            arrival: {
                                iataCode: "MNL",
                                terminal: "2",
                                at: "2023-06-20T17:30:00",
                            },
                            carrierCode: "PR",
                            number: "427",
                            aircraft: {
                                code: "321",
                            },
                            operating: {
                                carrierCode: "PR",
                            },
                            duration: "PT4H50M",
                            id: "124",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                        {
                            departure: {
                                iataCode: "MNL",
                                terminal: "2",
                                at: "2023-06-20T21:05:00",
                            },
                            arrival: {
                                iataCode: "LAX",
                                terminal: "B",
                                at: "2023-06-20T19:30:00",
                            },
                            carrierCode: "PR",
                            number: "102",
                            aircraft: {
                                code: "773",
                            },
                            operating: {
                                carrierCode: "PR",
                            },
                            duration: "PT13H25M",
                            id: "125",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                    ],
                },
            ],
            price: {
                currency: "USD",
                total: "691.65",
                base: "262.00",
                fees: [
                    {
                        amount: "0.00",
                        type: "SUPPLIER",
                    },
                    {
                        amount: "0.00",
                        type: "TICKETING",
                    },
                ],
                grandTotal: "691.65",
            },
            pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
            },
            validatingAirlineCodes: ["PR"],
            travelerPricings: [
                {
                    travelerId: "1",
                    fareOption: "STANDARD",
                    travelerType: "ADULT",
                    price: {
                        currency: "USD",
                        total: "691.65",
                        base: "262.00",
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "124",
                            cabin: "ECONOMY",
                            fareBasis: "TLOBJP",
                            class: "T",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                        {
                            segmentId: "125",
                            cabin: "ECONOMY",
                            fareBasis: "TLOBJP",
                            class: "T",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                    ],
                },
            ],
        },
        {
            type: "flight-offer",
            id: "10",
            source: "GDS",
            instantTicketingRequired: false,
            nonHomogeneous: false,
            oneWay: false,
            lastTicketingDate: "2023-06-20",
            numberOfBookableSeats: 9,
            itineraries: [
                {
                    duration: "PT26H",
                    segments: [
                        {
                            departure: {
                                iataCode: "NRT",
                                terminal: "2",
                                at: "2023-06-20T09:30:00",
                            },
                            arrival: {
                                iataCode: "MNL",
                                terminal: "2",
                                at: "2023-06-20T13:35:00",
                            },
                            carrierCode: "PR",
                            number: "431",
                            aircraft: {
                                code: "333",
                            },
                            operating: {
                                carrierCode: "PR",
                            },
                            duration: "PT5H5M",
                            id: "16",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                        {
                            departure: {
                                iataCode: "MNL",
                                terminal: "2",
                                at: "2023-06-20T21:05:00",
                            },
                            arrival: {
                                iataCode: "LAX",
                                terminal: "B",
                                at: "2023-06-20T19:30:00",
                            },
                            carrierCode: "PR",
                            number: "102",
                            aircraft: {
                                code: "773",
                            },
                            operating: {
                                carrierCode: "PR",
                            },
                            duration: "PT13H25M",
                            id: "17",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                    ],
                },
            ],
            price: {
                currency: "USD",
                total: "691.65",
                base: "262.00",
                fees: [
                    {
                        amount: "0.00",
                        type: "SUPPLIER",
                    },
                    {
                        amount: "0.00",
                        type: "TICKETING",
                    },
                ],
                grandTotal: "691.65",
            },
            pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
            },
            validatingAirlineCodes: ["PR"],
            travelerPricings: [
                {
                    travelerId: "1",
                    fareOption: "STANDARD",
                    travelerType: "ADULT",
                    price: {
                        currency: "USD",
                        total: "691.65",
                        base: "262.00",
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "16",
                            cabin: "ECONOMY",
                            fareBasis: "TLOBJP",
                            class: "T",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                        {
                            segmentId: "17",
                            cabin: "ECONOMY",
                            fareBasis: "TLOBJP",
                            class: "T",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                    ],
                },
            ],
        },
        {
            type: "flight-offer",
            id: "11",
            source: "GDS",
            instantTicketingRequired: false,
            nonHomogeneous: false,
            oneWay: false,
            lastTicketingDate: "2023-06-20",
            numberOfBookableSeats: 9,
            itineraries: [
                {
                    duration: "PT36H20M",
                    segments: [
                        {
                            departure: {
                                iataCode: "NRT",
                                terminal: "2",
                                at: "2023-06-20T13:40:00",
                            },
                            arrival: {
                                iataCode: "MNL",
                                terminal: "2",
                                at: "2023-06-20T17:30:00",
                            },
                            carrierCode: "PR",
                            number: "427",
                            aircraft: {
                                code: "321",
                            },
                            operating: {
                                carrierCode: "PR",
                            },
                            duration: "PT4H50M",
                            id: "57",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                        {
                            departure: {
                                iataCode: "MNL",
                                terminal: "2",
                                at: "2023-06-21T11:25:00",
                            },
                            arrival: {
                                iataCode: "LAX",
                                terminal: "B",
                                at: "2023-06-21T10:00:00",
                            },
                            carrierCode: "PR",
                            number: "112",
                            aircraft: {
                                code: "773",
                            },
                            operating: {
                                carrierCode: "PR",
                            },
                            duration: "PT13H35M",
                            id: "58",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                    ],
                },
            ],
            price: {
                currency: "USD",
                total: "691.65",
                base: "262.00",
                fees: [
                    {
                        amount: "0.00",
                        type: "SUPPLIER",
                    },
                    {
                        amount: "0.00",
                        type: "TICKETING",
                    },
                ],
                grandTotal: "691.65",
            },
            pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
            },
            validatingAirlineCodes: ["PR"],
            travelerPricings: [
                {
                    travelerId: "1",
                    fareOption: "STANDARD",
                    travelerType: "ADULT",
                    price: {
                        currency: "USD",
                        total: "691.65",
                        base: "262.00",
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "57",
                            cabin: "ECONOMY",
                            fareBasis: "TLOBJP",
                            class: "T",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                        {
                            segmentId: "58",
                            cabin: "ECONOMY",
                            fareBasis: "TLOBJP",
                            class: "T",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                    ],
                },
            ],
        },
        {
            type: "flight-offer",
            id: "12",
            source: "GDS",
            instantTicketingRequired: false,
            nonHomogeneous: false,
            oneWay: false,
            lastTicketingDate: "2023-06-20",
            numberOfBookableSeats: 9,
            itineraries: [
                {
                    duration: "PT40H30M",
                    segments: [
                        {
                            departure: {
                                iataCode: "NRT",
                                terminal: "2",
                                at: "2023-06-20T09:30:00",
                            },
                            arrival: {
                                iataCode: "MNL",
                                terminal: "2",
                                at: "2023-06-20T13:35:00",
                            },
                            carrierCode: "PR",
                            number: "431",
                            aircraft: {
                                code: "333",
                            },
                            operating: {
                                carrierCode: "PR",
                            },
                            duration: "PT5H5M",
                            id: "87",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                        {
                            departure: {
                                iataCode: "MNL",
                                terminal: "2",
                                at: "2023-06-21T11:25:00",
                            },
                            arrival: {
                                iataCode: "LAX",
                                terminal: "B",
                                at: "2023-06-21T10:00:00",
                            },
                            carrierCode: "PR",
                            number: "112",
                            aircraft: {
                                code: "773",
                            },
                            operating: {
                                carrierCode: "PR",
                            },
                            duration: "PT13H35M",
                            id: "88",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                    ],
                },
            ],
            price: {
                currency: "USD",
                total: "691.65",
                base: "262.00",
                fees: [
                    {
                        amount: "0.00",
                        type: "SUPPLIER",
                    },
                    {
                        amount: "0.00",
                        type: "TICKETING",
                    },
                ],
                grandTotal: "691.65",
            },
            pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
            },
            validatingAirlineCodes: ["PR"],
            travelerPricings: [
                {
                    travelerId: "1",
                    fareOption: "STANDARD",
                    travelerType: "ADULT",
                    price: {
                        currency: "USD",
                        total: "691.65",
                        base: "262.00",
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "87",
                            cabin: "ECONOMY",
                            fareBasis: "TLOBJP",
                            class: "T",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                        {
                            segmentId: "88",
                            cabin: "ECONOMY",
                            fareBasis: "TLOBJP",
                            class: "T",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                    ],
                },
            ],
        },
        {
            type: "flight-offer",
            id: "13",
            source: "GDS",
            instantTicketingRequired: false,
            nonHomogeneous: false,
            oneWay: false,
            lastTicketingDate: "2023-03-20",
            numberOfBookableSeats: 9,
            itineraries: [
                {
                    duration: "PT17H15M",
                    segments: [
                        {
                            departure: {
                                iataCode: "NRT",
                                terminal: "1",
                                at: "2023-06-20T16:55:00",
                            },
                            arrival: {
                                iataCode: "YVR",
                                terminal: "M",
                                at: "2023-06-20T09:50:00",
                            },
                            carrierCode: "AC",
                            number: "4",
                            aircraft: {
                                code: "77W",
                            },
                            operating: {
                                carrierCode: "AC",
                            },
                            duration: "PT8H55M",
                            id: "39",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                        {
                            departure: {
                                iataCode: "YVR",
                                terminal: "M",
                                at: "2023-06-20T15:10:00",
                            },
                            arrival: {
                                iataCode: "LAX",
                                terminal: "7",
                                at: "2023-06-20T18:10:00",
                            },
                            carrierCode: "AC",
                            number: "4490",
                            aircraft: {
                                code: "320",
                            },
                            operating: {
                                carrierCode: "UA",
                            },
                            duration: "PT3H",
                            id: "40",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                    ],
                },
            ],
            price: {
                currency: "USD",
                total: "711.35",
                base: "287.00",
                fees: [
                    {
                        amount: "0.00",
                        type: "SUPPLIER",
                    },
                    {
                        amount: "0.00",
                        type: "TICKETING",
                    },
                ],
                grandTotal: "711.35",
            },
            pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
            },
            validatingAirlineCodes: ["AC"],
            travelerPricings: [
                {
                    travelerId: "1",
                    fareOption: "STANDARD",
                    travelerType: "ADULT",
                    price: {
                        currency: "USD",
                        total: "711.35",
                        base: "287.00",
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "39",
                            cabin: "ECONOMY",
                            fareBasis: "SKVQ23BA",
                            brandedFare: "BASIC",
                            class: "S",
                            includedCheckedBags: {
                                quantity: 1,
                            },
                        },
                        {
                            segmentId: "40",
                            cabin: "ECONOMY",
                            fareBasis: "SKVQ23BA",
                            brandedFare: "BASIC",
                            class: "S",
                            includedCheckedBags: {
                                quantity: 1,
                            },
                        },
                    ],
                },
            ],
        },
        {
            type: "flight-offer",
            id: "14",
            source: "GDS",
            instantTicketingRequired: false,
            nonHomogeneous: false,
            oneWay: false,
            lastTicketingDate: "2023-06-20",
            numberOfBookableSeats: 9,
            itineraries: [
                {
                    duration: "PT16H50M",
                    segments: [
                        {
                            departure: {
                                iataCode: "NRT",
                                terminal: "1",
                                at: "2023-06-20T09:00:00",
                            },
                            arrival: {
                                iataCode: "ICN",
                                terminal: "1",
                                at: "2023-06-20T11:30:00",
                            },
                            carrierCode: "OZ",
                            number: "107",
                            aircraft: {
                                code: "321",
                            },
                            operating: {
                                carrierCode: "OZ",
                            },
                            duration: "PT2H30M",
                            id: "122",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                        {
                            departure: {
                                iataCode: "ICN",
                                terminal: "1",
                                at: "2023-06-20T14:40:00",
                            },
                            arrival: {
                                iataCode: "LAX",
                                terminal: "B",
                                at: "2023-06-20T09:50:00",
                            },
                            carrierCode: "OZ",
                            number: "202",
                            aircraft: {
                                code: "388",
                            },
                            operating: {
                                carrierCode: "OZ",
                            },
                            duration: "PT11H10M",
                            id: "123",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                    ],
                },
            ],
            price: {
                currency: "USD",
                total: "829.75",
                base: "396.00",
                fees: [
                    {
                        amount: "0.00",
                        type: "SUPPLIER",
                    },
                    {
                        amount: "0.00",
                        type: "TICKETING",
                    },
                ],
                grandTotal: "829.75",
            },
            pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
            },
            validatingAirlineCodes: ["OZ"],
            travelerPricings: [
                {
                    travelerId: "1",
                    fareOption: "STANDARD",
                    travelerType: "ADULT",
                    price: {
                        currency: "USD",
                        total: "829.75",
                        base: "396.00",
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "122",
                            cabin: "ECONOMY",
                            fareBasis: "KLOJU",
                            class: "K",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                        {
                            segmentId: "123",
                            cabin: "ECONOMY",
                            fareBasis: "KLOJU",
                            class: "K",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                    ],
                },
            ],
        },
        {
            type: "flight-offer",
            id: "15",
            source: "GDS",
            instantTicketingRequired: false,
            nonHomogeneous: false,
            oneWay: false,
            lastTicketingDate: "2023-06-20",
            numberOfBookableSeats: 9,
            itineraries: [
                {
                    duration: "PT18H40M",
                    segments: [
                        {
                            departure: {
                                iataCode: "NRT",
                                terminal: "1",
                                at: "2023-06-20T13:20:00",
                            },
                            arrival: {
                                iataCode: "ICN",
                                terminal: "1",
                                at: "2023-06-20T15:50:00",
                            },
                            carrierCode: "OZ",
                            number: "101",
                            aircraft: {
                                code: "333",
                            },
                            operating: {
                                carrierCode: "OZ",
                            },
                            duration: "PT2H30M",
                            id: "102",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                        {
                            departure: {
                                iataCode: "ICN",
                                terminal: "1",
                                at: "2023-06-20T20:40:00",
                            },
                            arrival: {
                                iataCode: "LAX",
                                terminal: "B",
                                at: "2023-06-20T16:00:00",
                            },
                            carrierCode: "OZ",
                            number: "204",
                            aircraft: {
                                code: "359",
                            },
                            operating: {
                                carrierCode: "OZ",
                            },
                            duration: "PT11H20M",
                            id: "103",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                    ],
                },
            ],
            price: {
                currency: "USD",
                total: "829.75",
                base: "396.00",
                fees: [
                    {
                        amount: "0.00",
                        type: "SUPPLIER",
                    },
                    {
                        amount: "0.00",
                        type: "TICKETING",
                    },
                ],
                grandTotal: "829.75",
            },
            pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
            },
            validatingAirlineCodes: ["OZ"],
            travelerPricings: [
                {
                    travelerId: "1",
                    fareOption: "STANDARD",
                    travelerType: "ADULT",
                    price: {
                        currency: "USD",
                        total: "829.75",
                        base: "396.00",
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "102",
                            cabin: "ECONOMY",
                            fareBasis: "KLOJU",
                            class: "K",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                        {
                            segmentId: "103",
                            cabin: "ECONOMY",
                            fareBasis: "KLOJU",
                            class: "K",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                    ],
                },
            ],
        },
        {
            type: "flight-offer",
            id: "16",
            source: "GDS",
            instantTicketingRequired: false,
            nonHomogeneous: false,
            oneWay: false,
            lastTicketingDate: "2023-06-20",
            numberOfBookableSeats: 9,
            itineraries: [
                {
                    duration: "PT23H",
                    segments: [
                        {
                            departure: {
                                iataCode: "NRT",
                                terminal: "1",
                                at: "2023-06-20T09:00:00",
                            },
                            arrival: {
                                iataCode: "ICN",
                                terminal: "1",
                                at: "2023-06-20T11:30:00",
                            },
                            carrierCode: "OZ",
                            number: "107",
                            aircraft: {
                                code: "321",
                            },
                            operating: {
                                carrierCode: "OZ",
                            },
                            duration: "PT2H30M",
                            id: "12",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                        {
                            departure: {
                                iataCode: "ICN",
                                terminal: "1",
                                at: "2023-06-20T20:40:00",
                            },
                            arrival: {
                                iataCode: "LAX",
                                terminal: "B",
                                at: "2023-06-20T16:00:00",
                            },
                            carrierCode: "OZ",
                            number: "204",
                            aircraft: {
                                code: "359",
                            },
                            operating: {
                                carrierCode: "OZ",
                            },
                            duration: "PT11H20M",
                            id: "13",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                    ],
                },
            ],
            price: {
                currency: "USD",
                total: "829.75",
                base: "396.00",
                fees: [
                    {
                        amount: "0.00",
                        type: "SUPPLIER",
                    },
                    {
                        amount: "0.00",
                        type: "TICKETING",
                    },
                ],
                grandTotal: "829.75",
            },
            pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
            },
            validatingAirlineCodes: ["OZ"],
            travelerPricings: [
                {
                    travelerId: "1",
                    fareOption: "STANDARD",
                    travelerType: "ADULT",
                    price: {
                        currency: "USD",
                        total: "829.75",
                        base: "396.00",
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "12",
                            cabin: "ECONOMY",
                            fareBasis: "KLOJU",
                            class: "K",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                        {
                            segmentId: "13",
                            cabin: "ECONOMY",
                            fareBasis: "KLOJU",
                            class: "K",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                    ],
                },
            ],
        },
        {
            type: "flight-offer",
            id: "17",
            source: "GDS",
            instantTicketingRequired: false,
            nonHomogeneous: false,
            oneWay: false,
            lastTicketingDate: "2023-06-20",
            numberOfBookableSeats: 9,
            itineraries: [
                {
                    duration: "PT31H",
                    segments: [
                        {
                            departure: {
                                iataCode: "NRT",
                                terminal: "1",
                                at: "2023-06-20T18:50:00",
                            },
                            arrival: {
                                iataCode: "ICN",
                                terminal: "1",
                                at: "2023-06-20T21:30:00",
                            },
                            carrierCode: "OZ",
                            number: "105",
                            aircraft: {
                                code: "32Q",
                            },
                            operating: {
                                carrierCode: "OZ",
                            },
                            duration: "PT2H40M",
                            id: "18",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                        {
                            departure: {
                                iataCode: "ICN",
                                terminal: "1",
                                at: "2023-06-21T14:40:00",
                            },
                            arrival: {
                                iataCode: "LAX",
                                terminal: "B",
                                at: "2023-06-21T09:50:00",
                            },
                            carrierCode: "OZ",
                            number: "202",
                            aircraft: {
                                code: "388",
                            },
                            operating: {
                                carrierCode: "OZ",
                            },
                            duration: "PT11H10M",
                            id: "19",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                    ],
                },
            ],
            price: {
                currency: "USD",
                total: "829.75",
                base: "396.00",
                fees: [
                    {
                        amount: "0.00",
                        type: "SUPPLIER",
                    },
                    {
                        amount: "0.00",
                        type: "TICKETING",
                    },
                ],
                grandTotal: "829.75",
            },
            pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
            },
            validatingAirlineCodes: ["OZ"],
            travelerPricings: [
                {
                    travelerId: "1",
                    fareOption: "STANDARD",
                    travelerType: "ADULT",
                    price: {
                        currency: "USD",
                        total: "829.75",
                        base: "396.00",
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "18",
                            cabin: "ECONOMY",
                            fareBasis: "KLOJU",
                            class: "K",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                        {
                            segmentId: "19",
                            cabin: "ECONOMY",
                            fareBasis: "KLOJU",
                            class: "K",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                    ],
                },
            ],
        },
        {
            type: "flight-offer",
            id: "18",
            source: "GDS",
            instantTicketingRequired: false,
            nonHomogeneous: false,
            oneWay: false,
            lastTicketingDate: "2023-06-20",
            numberOfBookableSeats: 9,
            itineraries: [
                {
                    duration: "PT36H30M",
                    segments: [
                        {
                            departure: {
                                iataCode: "NRT",
                                terminal: "1",
                                at: "2023-06-20T13:20:00",
                            },
                            arrival: {
                                iataCode: "ICN",
                                terminal: "1",
                                at: "2023-06-20T15:50:00",
                            },
                            carrierCode: "OZ",
                            number: "101",
                            aircraft: {
                                code: "333",
                            },
                            operating: {
                                carrierCode: "OZ",
                            },
                            duration: "PT2H30M",
                            id: "85",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                        {
                            departure: {
                                iataCode: "ICN",
                                terminal: "1",
                                at: "2023-06-21T14:40:00",
                            },
                            arrival: {
                                iataCode: "LAX",
                                terminal: "B",
                                at: "2023-06-21T09:50:00",
                            },
                            carrierCode: "OZ",
                            number: "202",
                            aircraft: {
                                code: "388",
                            },
                            operating: {
                                carrierCode: "OZ",
                            },
                            duration: "PT11H10M",
                            id: "86",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                    ],
                },
            ],
            price: {
                currency: "USD",
                total: "829.75",
                base: "396.00",
                fees: [
                    {
                        amount: "0.00",
                        type: "SUPPLIER",
                    },
                    {
                        amount: "0.00",
                        type: "TICKETING",
                    },
                ],
                grandTotal: "829.75",
            },
            pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
            },
            validatingAirlineCodes: ["OZ"],
            travelerPricings: [
                {
                    travelerId: "1",
                    fareOption: "STANDARD",
                    travelerType: "ADULT",
                    price: {
                        currency: "USD",
                        total: "829.75",
                        base: "396.00",
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "85",
                            cabin: "ECONOMY",
                            fareBasis: "KLOJU",
                            class: "K",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                        {
                            segmentId: "86",
                            cabin: "ECONOMY",
                            fareBasis: "KLOJU",
                            class: "K",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                    ],
                },
            ],
        },
        {
            type: "flight-offer",
            id: "19",
            source: "GDS",
            instantTicketingRequired: false,
            nonHomogeneous: false,
            oneWay: false,
            lastTicketingDate: "2023-06-20",
            numberOfBookableSeats: 9,
            itineraries: [
                {
                    duration: "PT37H10M",
                    segments: [
                        {
                            departure: {
                                iataCode: "NRT",
                                terminal: "1",
                                at: "2023-06-20T18:50:00",
                            },
                            arrival: {
                                iataCode: "ICN",
                                terminal: "1",
                                at: "2023-06-20T21:30:00",
                            },
                            carrierCode: "OZ",
                            number: "105",
                            aircraft: {
                                code: "32Q",
                            },
                            operating: {
                                carrierCode: "OZ",
                            },
                            duration: "PT2H40M",
                            id: "37",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                        {
                            departure: {
                                iataCode: "ICN",
                                terminal: "1",
                                at: "2023-06-21T20:40:00",
                            },
                            arrival: {
                                iataCode: "LAX",
                                terminal: "B",
                                at: "2023-06-21T16:00:00",
                            },
                            carrierCode: "OZ",
                            number: "204",
                            aircraft: {
                                code: "359",
                            },
                            operating: {
                                carrierCode: "OZ",
                            },
                            duration: "PT11H20M",
                            id: "38",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                    ],
                },
            ],
            price: {
                currency: "USD",
                total: "829.75",
                base: "396.00",
                fees: [
                    {
                        amount: "0.00",
                        type: "SUPPLIER",
                    },
                    {
                        amount: "0.00",
                        type: "TICKETING",
                    },
                ],
                grandTotal: "829.75",
            },
            pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
            },
            validatingAirlineCodes: ["OZ"],
            travelerPricings: [
                {
                    travelerId: "1",
                    fareOption: "STANDARD",
                    travelerType: "ADULT",
                    price: {
                        currency: "USD",
                        total: "829.75",
                        base: "396.00",
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "37",
                            cabin: "ECONOMY",
                            fareBasis: "KLOJU",
                            class: "K",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                        {
                            segmentId: "38",
                            cabin: "ECONOMY",
                            fareBasis: "KLOJU",
                            class: "K",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                    ],
                },
            ],
        },
        {
            type: "flight-offer",
            id: "20",
            source: "GDS",
            instantTicketingRequired: false,
            nonHomogeneous: false,
            oneWay: false,
            lastTicketingDate: "2023-06-15",
            numberOfBookableSeats: 9,
            itineraries: [
                {
                    duration: "PT20H5M",
                    segments: [
                        {
                            departure: {
                                iataCode: "NRT",
                                terminal: "2",
                                at: "2023-06-20T18:30:00",
                            },
                            arrival: {
                                iataCode: "HKG",
                                terminal: "1",
                                at: "2023-06-20T22:25:00",
                            },
                            carrierCode: "CX",
                            number: "505",
                            aircraft: {
                                code: "333",
                            },
                            operating: {
                                carrierCode: "CX",
                            },
                            duration: "PT4H55M",
                            id: "22",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                        {
                            departure: {
                                iataCode: "HKG",
                                terminal: "1",
                                at: "2023-06-21T00:05:00",
                            },
                            arrival: {
                                iataCode: "LAX",
                                terminal: "B",
                                at: "2023-06-20T22:35:00",
                            },
                            carrierCode: "CX",
                            number: "880",
                            aircraft: {
                                code: "77W",
                            },
                            operating: {
                                carrierCode: "CX",
                            },
                            duration: "PT13H30M",
                            id: "23",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                    ],
                },
            ],
            price: {
                currency: "USD",
                total: "925.95",
                base: "579.00",
                fees: [
                    {
                        amount: "0.00",
                        type: "SUPPLIER",
                    },
                    {
                        amount: "0.00",
                        type: "TICKETING",
                    },
                ],
                grandTotal: "925.95",
            },
            pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
            },
            validatingAirlineCodes: ["CX"],
            travelerPricings: [
                {
                    travelerId: "1",
                    fareOption: "STANDARD",
                    travelerType: "ADULT",
                    price: {
                        currency: "USD",
                        total: "925.95",
                        base: "579.00",
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "22",
                            cabin: "ECONOMY",
                            fareBasis: "SR21JBAO",
                            brandedFare: "ECONLIGHT",
                            class: "S",
                            includedCheckedBags: {
                                quantity: 1,
                            },
                        },
                        {
                            segmentId: "23",
                            cabin: "ECONOMY",
                            fareBasis: "SR21JBAO",
                            brandedFare: "ECONLIGHT",
                            class: "S",
                            includedCheckedBags: {
                                quantity: 1,
                            },
                        },
                    ],
                },
            ],
        },
        {
            type: "flight-offer",
            id: "21",
            source: "GDS",
            instantTicketingRequired: false,
            nonHomogeneous: false,
            oneWay: false,
            lastTicketingDate: "2023-06-15",
            numberOfBookableSeats: 9,
            itineraries: [
                {
                    duration: "PT20H30M",
                    segments: [
                        {
                            departure: {
                                iataCode: "NRT",
                                terminal: "2",
                                at: "2023-06-20T10:40:00",
                            },
                            arrival: {
                                iataCode: "HKG",
                                terminal: "1",
                                at: "2023-06-20T14:40:00",
                            },
                            carrierCode: "CX",
                            number: "501",
                            aircraft: {
                                code: "333",
                            },
                            operating: {
                                carrierCode: "CX",
                            },
                            duration: "PT5H",
                            id: "75",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                        {
                            departure: {
                                iataCode: "HKG",
                                terminal: "1",
                                at: "2023-06-20T16:45:00",
                            },
                            arrival: {
                                iataCode: "LAX",
                                terminal: "B",
                                at: "2023-06-20T15:10:00",
                            },
                            carrierCode: "CX",
                            number: "882",
                            aircraft: {
                                code: "359",
                            },
                            operating: {
                                carrierCode: "CX",
                            },
                            duration: "PT13H25M",
                            id: "76",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                    ],
                },
            ],
            price: {
                currency: "USD",
                total: "925.95",
                base: "579.00",
                fees: [
                    {
                        amount: "0.00",
                        type: "SUPPLIER",
                    },
                    {
                        amount: "0.00",
                        type: "TICKETING",
                    },
                ],
                grandTotal: "925.95",
            },
            pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
            },
            validatingAirlineCodes: ["CX"],
            travelerPricings: [
                {
                    travelerId: "1",
                    fareOption: "STANDARD",
                    travelerType: "ADULT",
                    price: {
                        currency: "USD",
                        total: "925.95",
                        base: "579.00",
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "75",
                            cabin: "ECONOMY",
                            fareBasis: "SR21JBAO",
                            brandedFare: "ECONLIGHT",
                            class: "S",
                            includedCheckedBags: {
                                quantity: 1,
                            },
                        },
                        {
                            segmentId: "76",
                            cabin: "ECONOMY",
                            fareBasis: "SR21JBAO",
                            brandedFare: "ECONLIGHT",
                            class: "S",
                            includedCheckedBags: {
                                quantity: 1,
                            },
                        },
                    ],
                },
            ],
        },
        {
            type: "flight-offer",
            id: "22",
            source: "GDS",
            instantTicketingRequired: false,
            nonHomogeneous: false,
            oneWay: false,
            lastTicketingDate: "2023-06-15",
            numberOfBookableSeats: 9,
            itineraries: [
                {
                    duration: "PT21H20M",
                    segments: [
                        {
                            departure: {
                                iataCode: "NRT",
                                terminal: "2",
                                at: "2023-06-20T17:15:00",
                            },
                            arrival: {
                                iataCode: "HKG",
                                terminal: "1",
                                at: "2023-06-20T21:20:00",
                            },
                            carrierCode: "CX",
                            number: "521",
                            aircraft: {
                                code: "333",
                            },
                            operating: {
                                carrierCode: "CX",
                            },
                            duration: "PT5H5M",
                            id: "47",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                        {
                            departure: {
                                iataCode: "HKG",
                                terminal: "1",
                                at: "2023-06-21T00:05:00",
                            },
                            arrival: {
                                iataCode: "LAX",
                                terminal: "B",
                                at: "2023-06-20T22:35:00",
                            },
                            carrierCode: "CX",
                            number: "880",
                            aircraft: {
                                code: "77W",
                            },
                            operating: {
                                carrierCode: "CX",
                            },
                            duration: "PT13H30M",
                            id: "48",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                    ],
                },
            ],
            price: {
                currency: "USD",
                total: "925.95",
                base: "579.00",
                fees: [
                    {
                        amount: "0.00",
                        type: "SUPPLIER",
                    },
                    {
                        amount: "0.00",
                        type: "TICKETING",
                    },
                ],
                grandTotal: "925.95",
            },
            pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
            },
            validatingAirlineCodes: ["CX"],
            travelerPricings: [
                {
                    travelerId: "1",
                    fareOption: "STANDARD",
                    travelerType: "ADULT",
                    price: {
                        currency: "USD",
                        total: "925.95",
                        base: "579.00",
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "47",
                            cabin: "ECONOMY",
                            fareBasis: "SR21JBAO",
                            brandedFare: "ECONLIGHT",
                            class: "S",
                            includedCheckedBags: {
                                quantity: 1,
                            },
                        },
                        {
                            segmentId: "48",
                            cabin: "ECONOMY",
                            fareBasis: "SR21JBAO",
                            brandedFare: "ECONLIGHT",
                            class: "S",
                            includedCheckedBags: {
                                quantity: 1,
                            },
                        },
                    ],
                },
            ],
        },
        {
            type: "flight-offer",
            id: "23",
            source: "GDS",
            instantTicketingRequired: false,
            nonHomogeneous: false,
            oneWay: false,
            lastTicketingDate: "2023-06-15",
            numberOfBookableSeats: 9,
            itineraries: [
                {
                    duration: "PT21H55M",
                    segments: [
                        {
                            departure: {
                                iataCode: "NRT",
                                terminal: "2",
                                at: "2023-06-20T09:15:00",
                            },
                            arrival: {
                                iataCode: "HKG",
                                terminal: "1",
                                at: "2023-06-20T13:15:00",
                            },
                            carrierCode: "CX",
                            number: "509",
                            aircraft: {
                                code: "333",
                            },
                            operating: {
                                carrierCode: "CX",
                            },
                            duration: "PT5H",
                            id: "134",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                        {
                            departure: {
                                iataCode: "HKG",
                                terminal: "1",
                                at: "2023-06-20T16:45:00",
                            },
                            arrival: {
                                iataCode: "LAX",
                                terminal: "B",
                                at: "2023-06-20T15:10:00",
                            },
                            carrierCode: "CX",
                            number: "882",
                            aircraft: {
                                code: "359",
                            },
                            operating: {
                                carrierCode: "CX",
                            },
                            duration: "PT13H25M",
                            id: "135",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                    ],
                },
            ],
            price: {
                currency: "USD",
                total: "925.95",
                base: "579.00",
                fees: [
                    {
                        amount: "0.00",
                        type: "SUPPLIER",
                    },
                    {
                        amount: "0.00",
                        type: "TICKETING",
                    },
                ],
                grandTotal: "925.95",
            },
            pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
            },
            validatingAirlineCodes: ["CX"],
            travelerPricings: [
                {
                    travelerId: "1",
                    fareOption: "STANDARD",
                    travelerType: "ADULT",
                    price: {
                        currency: "USD",
                        total: "925.95",
                        base: "579.00",
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "134",
                            cabin: "ECONOMY",
                            fareBasis: "SR21JBAO",
                            brandedFare: "ECONLIGHT",
                            class: "S",
                            includedCheckedBags: {
                                quantity: 1,
                            },
                        },
                        {
                            segmentId: "135",
                            cabin: "ECONOMY",
                            fareBasis: "SR21JBAO",
                            brandedFare: "ECONLIGHT",
                            class: "S",
                            includedCheckedBags: {
                                quantity: 1,
                            },
                        },
                    ],
                },
            ],
        },
        {
            type: "flight-offer",
            id: "24",
            source: "GDS",
            instantTicketingRequired: false,
            nonHomogeneous: false,
            oneWay: false,
            lastTicketingDate: "2023-06-15",
            numberOfBookableSeats: 9,
            itineraries: [
                {
                    duration: "PT22H55M",
                    segments: [
                        {
                            departure: {
                                iataCode: "NRT",
                                terminal: "2",
                                at: "2023-06-20T15:40:00",
                            },
                            arrival: {
                                iataCode: "HKG",
                                terminal: "1",
                                at: "2023-06-20T21:30:00",
                            },
                            carrierCode: "CX",
                            number: "451",
                            aircraft: {
                                code: "333",
                            },
                            operating: {
                                carrierCode: "CX",
                            },
                            duration: "PT6H50M",
                            stops: [
                                {
                                    iataCode: "TPE",
                                    duration: "PT1H",
                                    arrivalAt: "2023-06-20T18:35:00",
                                    departureAt: "2023-06-20T19:35:00",
                                },
                            ],
                            id: "136",
                            numberOfStops: 1,
                            blacklistedInEU: false,
                        },
                        {
                            departure: {
                                iataCode: "HKG",
                                terminal: "1",
                                at: "2023-06-21T00:05:00",
                            },
                            arrival: {
                                iataCode: "LAX",
                                terminal: "B",
                                at: "2023-06-20T22:35:00",
                            },
                            carrierCode: "CX",
                            number: "880",
                            aircraft: {
                                code: "77W",
                            },
                            operating: {
                                carrierCode: "CX",
                            },
                            duration: "PT13H30M",
                            id: "137",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                    ],
                },
            ],
            price: {
                currency: "USD",
                total: "925.95",
                base: "579.00",
                fees: [
                    {
                        amount: "0.00",
                        type: "SUPPLIER",
                    },
                    {
                        amount: "0.00",
                        type: "TICKETING",
                    },
                ],
                grandTotal: "925.95",
            },
            pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
            },
            validatingAirlineCodes: ["CX"],
            travelerPricings: [
                {
                    travelerId: "1",
                    fareOption: "STANDARD",
                    travelerType: "ADULT",
                    price: {
                        currency: "USD",
                        total: "925.95",
                        base: "579.00",
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "136",
                            cabin: "ECONOMY",
                            fareBasis: "SR21JBAO",
                            brandedFare: "ECONLIGHT",
                            class: "S",
                            includedCheckedBags: {
                                quantity: 1,
                            },
                        },
                        {
                            segmentId: "137",
                            cabin: "ECONOMY",
                            fareBasis: "SR21JBAO",
                            brandedFare: "ECONLIGHT",
                            class: "S",
                            includedCheckedBags: {
                                quantity: 1,
                            },
                        },
                    ],
                },
            ],
        },
        {
            type: "flight-offer",
            id: "25",
            source: "GDS",
            instantTicketingRequired: false,
            nonHomogeneous: false,
            oneWay: false,
            lastTicketingDate: "2023-06-15",
            numberOfBookableSeats: 9,
            itineraries: [
                {
                    duration: "PT23H45M",
                    segments: [
                        {
                            departure: {
                                iataCode: "NRT",
                                terminal: "2",
                                at: "2023-06-20T14:50:00",
                            },
                            arrival: {
                                iataCode: "HKG",
                                terminal: "1",
                                at: "2023-06-20T18:55:00",
                            },
                            carrierCode: "CX",
                            number: "527",
                            aircraft: {
                                code: "333",
                            },
                            operating: {
                                carrierCode: "CX",
                            },
                            duration: "PT5H5M",
                            id: "110",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                        {
                            departure: {
                                iataCode: "HKG",
                                terminal: "1",
                                at: "2023-06-21T00:05:00",
                            },
                            arrival: {
                                iataCode: "LAX",
                                terminal: "B",
                                at: "2023-06-20T22:35:00",
                            },
                            carrierCode: "CX",
                            number: "880",
                            aircraft: {
                                code: "77W",
                            },
                            operating: {
                                carrierCode: "CX",
                            },
                            duration: "PT13H30M",
                            id: "111",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                    ],
                },
            ],
            price: {
                currency: "USD",
                total: "925.95",
                base: "579.00",
                fees: [
                    {
                        amount: "0.00",
                        type: "SUPPLIER",
                    },
                    {
                        amount: "0.00",
                        type: "TICKETING",
                    },
                ],
                grandTotal: "925.95",
            },
            pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
            },
            validatingAirlineCodes: ["CX"],
            travelerPricings: [
                {
                    travelerId: "1",
                    fareOption: "STANDARD",
                    travelerType: "ADULT",
                    price: {
                        currency: "USD",
                        total: "925.95",
                        base: "579.00",
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "110",
                            cabin: "ECONOMY",
                            fareBasis: "SR21JBAO",
                            brandedFare: "ECONLIGHT",
                            class: "S",
                            includedCheckedBags: {
                                quantity: 1,
                            },
                        },
                        {
                            segmentId: "111",
                            cabin: "ECONOMY",
                            fareBasis: "SR21JBAO",
                            brandedFare: "ECONLIGHT",
                            class: "S",
                            includedCheckedBags: {
                                quantity: 1,
                            },
                        },
                    ],
                },
            ],
        },
        {
            type: "flight-offer",
            id: "26",
            source: "GDS",
            instantTicketingRequired: false,
            nonHomogeneous: false,
            oneWay: false,
            lastTicketingDate: "2023-06-15",
            numberOfBookableSeats: 9,
            itineraries: [
                {
                    duration: "PT27H55M",
                    segments: [
                        {
                            departure: {
                                iataCode: "NRT",
                                terminal: "2",
                                at: "2023-06-20T10:40:00",
                            },
                            arrival: {
                                iataCode: "HKG",
                                terminal: "1",
                                at: "2023-06-20T14:40:00",
                            },
                            carrierCode: "CX",
                            number: "501",
                            aircraft: {
                                code: "333",
                            },
                            operating: {
                                carrierCode: "CX",
                            },
                            duration: "PT5H",
                            id: "138",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                        {
                            departure: {
                                iataCode: "HKG",
                                terminal: "1",
                                at: "2023-06-21T00:05:00",
                            },
                            arrival: {
                                iataCode: "LAX",
                                terminal: "B",
                                at: "2023-06-20T22:35:00",
                            },
                            carrierCode: "CX",
                            number: "880",
                            aircraft: {
                                code: "77W",
                            },
                            operating: {
                                carrierCode: "CX",
                            },
                            duration: "PT13H30M",
                            id: "139",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                    ],
                },
            ],
            price: {
                currency: "USD",
                total: "925.95",
                base: "579.00",
                fees: [
                    {
                        amount: "0.00",
                        type: "SUPPLIER",
                    },
                    {
                        amount: "0.00",
                        type: "TICKETING",
                    },
                ],
                grandTotal: "925.95",
            },
            pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
            },
            validatingAirlineCodes: ["CX"],
            travelerPricings: [
                {
                    travelerId: "1",
                    fareOption: "STANDARD",
                    travelerType: "ADULT",
                    price: {
                        currency: "USD",
                        total: "925.95",
                        base: "579.00",
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "138",
                            cabin: "ECONOMY",
                            fareBasis: "SR21JBAO",
                            brandedFare: "ECONLIGHT",
                            class: "S",
                            includedCheckedBags: {
                                quantity: 1,
                            },
                        },
                        {
                            segmentId: "139",
                            cabin: "ECONOMY",
                            fareBasis: "SR21JBAO",
                            brandedFare: "ECONLIGHT",
                            class: "S",
                            includedCheckedBags: {
                                quantity: 1,
                            },
                        },
                    ],
                },
            ],
        },
        {
            type: "flight-offer",
            id: "27",
            source: "GDS",
            instantTicketingRequired: false,
            nonHomogeneous: false,
            oneWay: false,
            lastTicketingDate: "2023-06-15",
            numberOfBookableSeats: 9,
            itineraries: [
                {
                    duration: "PT29H20M",
                    segments: [
                        {
                            departure: {
                                iataCode: "NRT",
                                terminal: "2",
                                at: "2023-06-20T09:15:00",
                            },
                            arrival: {
                                iataCode: "HKG",
                                terminal: "1",
                                at: "2023-06-20T13:15:00",
                            },
                            carrierCode: "CX",
                            number: "509",
                            aircraft: {
                                code: "333",
                            },
                            operating: {
                                carrierCode: "CX",
                            },
                            duration: "PT5H",
                            id: "53",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                        {
                            departure: {
                                iataCode: "HKG",
                                terminal: "1",
                                at: "2023-06-21T00:05:00",
                            },
                            arrival: {
                                iataCode: "LAX",
                                terminal: "B",
                                at: "2023-06-20T22:35:00",
                            },
                            carrierCode: "CX",
                            number: "880",
                            aircraft: {
                                code: "77W",
                            },
                            operating: {
                                carrierCode: "CX",
                            },
                            duration: "PT13H30M",
                            id: "54",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                    ],
                },
            ],
            price: {
                currency: "USD",
                total: "925.95",
                base: "579.00",
                fees: [
                    {
                        amount: "0.00",
                        type: "SUPPLIER",
                    },
                    {
                        amount: "0.00",
                        type: "TICKETING",
                    },
                ],
                grandTotal: "925.95",
            },
            pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
            },
            validatingAirlineCodes: ["CX"],
            travelerPricings: [
                {
                    travelerId: "1",
                    fareOption: "STANDARD",
                    travelerType: "ADULT",
                    price: {
                        currency: "USD",
                        total: "925.95",
                        base: "579.00",
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "53",
                            cabin: "ECONOMY",
                            fareBasis: "SR21JBAO",
                            brandedFare: "ECONLIGHT",
                            class: "S",
                            includedCheckedBags: {
                                quantity: 1,
                            },
                        },
                        {
                            segmentId: "54",
                            cabin: "ECONOMY",
                            fareBasis: "SR21JBAO",
                            brandedFare: "ECONLIGHT",
                            class: "S",
                            includedCheckedBags: {
                                quantity: 1,
                            },
                        },
                    ],
                },
            ],
        },
        {
            type: "flight-offer",
            id: "28",
            source: "GDS",
            instantTicketingRequired: false,
            nonHomogeneous: false,
            oneWay: false,
            lastTicketingDate: "2023-03-18",
            numberOfBookableSeats: 9,
            itineraries: [
                {
                    duration: "PT13H38M",
                    segments: [
                        {
                            departure: {
                                iataCode: "NRT",
                                terminal: "1",
                                at: "2023-06-20T17:05:00",
                            },
                            arrival: {
                                iataCode: "SFO",
                                terminal: "I",
                                at: "2023-06-20T10:40:00",
                            },
                            carrierCode: "UA",
                            number: "838",
                            aircraft: {
                                code: "777",
                            },
                            operating: {
                                carrierCode: "UA",
                            },
                            duration: "PT9H35M",
                            id: "97",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                        {
                            departure: {
                                iataCode: "SFO",
                                terminal: "3",
                                at: "2023-06-20T13:00:00",
                            },
                            arrival: {
                                iataCode: "LAX",
                                terminal: "7",
                                at: "2023-06-20T14:43:00",
                            },
                            carrierCode: "UA",
                            number: "2166",
                            aircraft: {
                                code: "738",
                            },
                            operating: {
                                carrierCode: "UA",
                            },
                            duration: "PT1H43M",
                            id: "98",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                    ],
                },
            ],
            price: {
                currency: "USD",
                total: "929.35",
                base: "514.00",
                fees: [
                    {
                        amount: "0.00",
                        type: "SUPPLIER",
                    },
                    {
                        amount: "0.00",
                        type: "TICKETING",
                    },
                ],
                grandTotal: "929.35",
            },
            pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
            },
            validatingAirlineCodes: ["UA"],
            travelerPricings: [
                {
                    travelerId: "1",
                    fareOption: "STANDARD",
                    travelerType: "ADULT",
                    price: {
                        currency: "USD",
                        total: "929.35",
                        base: "514.00",
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "97",
                            cabin: "ECONOMY",
                            fareBasis: "KLX7IVB9",
                            brandedFare: "ECOBASIC",
                            class: "K",
                            includedCheckedBags: {
                                quantity: 1,
                            },
                        },
                        {
                            segmentId: "98",
                            cabin: "ECONOMY",
                            fareBasis: "KLX7IVB9",
                            brandedFare: "ECOBASIC",
                            class: "K",
                            includedCheckedBags: {
                                quantity: 1,
                            },
                        },
                    ],
                },
            ],
        },
        {
            type: "flight-offer",
            id: "29",
            source: "GDS",
            instantTicketingRequired: false,
            nonHomogeneous: false,
            oneWay: false,
            lastTicketingDate: "2023-03-18",
            numberOfBookableSeats: 9,
            itineraries: [
                {
                    duration: "PT14H29M",
                    segments: [
                        {
                            departure: {
                                iataCode: "NRT",
                                terminal: "1",
                                at: "2023-06-20T17:05:00",
                            },
                            arrival: {
                                iataCode: "SFO",
                                terminal: "I",
                                at: "2023-06-20T10:40:00",
                            },
                            carrierCode: "UA",
                            number: "838",
                            aircraft: {
                                code: "777",
                            },
                            operating: {
                                carrierCode: "UA",
                            },
                            duration: "PT9H35M",
                            id: "71",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                        {
                            departure: {
                                iataCode: "SFO",
                                terminal: "3",
                                at: "2023-06-20T13:50:00",
                            },
                            arrival: {
                                iataCode: "LAX",
                                terminal: "7",
                                at: "2023-06-20T15:34:00",
                            },
                            carrierCode: "UA",
                            number: "1312",
                            aircraft: {
                                code: "738",
                            },
                            operating: {
                                carrierCode: "UA",
                            },
                            duration: "PT1H44M",
                            id: "72",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                    ],
                },
            ],
            price: {
                currency: "USD",
                total: "929.35",
                base: "514.00",
                fees: [
                    {
                        amount: "0.00",
                        type: "SUPPLIER",
                    },
                    {
                        amount: "0.00",
                        type: "TICKETING",
                    },
                ],
                grandTotal: "929.35",
            },
            pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
            },
            validatingAirlineCodes: ["UA"],
            travelerPricings: [
                {
                    travelerId: "1",
                    fareOption: "STANDARD",
                    travelerType: "ADULT",
                    price: {
                        currency: "USD",
                        total: "929.35",
                        base: "514.00",
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "71",
                            cabin: "ECONOMY",
                            fareBasis: "KLX7IVB9",
                            brandedFare: "ECOBASIC",
                            class: "K",
                            includedCheckedBags: {
                                quantity: 1,
                            },
                        },
                        {
                            segmentId: "72",
                            cabin: "ECONOMY",
                            fareBasis: "KLX7IVB9",
                            brandedFare: "ECOBASIC",
                            class: "K",
                            includedCheckedBags: {
                                quantity: 1,
                            },
                        },
                    ],
                },
            ],
        },
        {
            type: "flight-offer",
            id: "30",
            source: "GDS",
            instantTicketingRequired: false,
            nonHomogeneous: false,
            oneWay: false,
            lastTicketingDate: "2023-03-18",
            numberOfBookableSeats: 9,
            itineraries: [
                {
                    duration: "PT15H33M",
                    segments: [
                        {
                            departure: {
                                iataCode: "NRT",
                                terminal: "1",
                                at: "2023-06-20T17:05:00",
                            },
                            arrival: {
                                iataCode: "SFO",
                                terminal: "I",
                                at: "2023-06-20T10:40:00",
                            },
                            carrierCode: "UA",
                            number: "838",
                            aircraft: {
                                code: "777",
                            },
                            operating: {
                                carrierCode: "UA",
                            },
                            duration: "PT9H35M",
                            id: "89",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                        {
                            departure: {
                                iataCode: "SFO",
                                terminal: "3",
                                at: "2023-06-20T15:00:00",
                            },
                            arrival: {
                                iataCode: "LAX",
                                terminal: "7",
                                at: "2023-06-20T16:38:00",
                            },
                            carrierCode: "UA",
                            number: "1008",
                            aircraft: {
                                code: "738",
                            },
                            operating: {
                                carrierCode: "UA",
                            },
                            duration: "PT1H38M",
                            id: "90",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                    ],
                },
            ],
            price: {
                currency: "USD",
                total: "929.35",
                base: "514.00",
                fees: [
                    {
                        amount: "0.00",
                        type: "SUPPLIER",
                    },
                    {
                        amount: "0.00",
                        type: "TICKETING",
                    },
                ],
                grandTotal: "929.35",
            },
            pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
            },
            validatingAirlineCodes: ["UA"],
            travelerPricings: [
                {
                    travelerId: "1",
                    fareOption: "STANDARD",
                    travelerType: "ADULT",
                    price: {
                        currency: "USD",
                        total: "929.35",
                        base: "514.00",
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "89",
                            cabin: "ECONOMY",
                            fareBasis: "KLX7IVB9",
                            brandedFare: "ECOBASIC",
                            class: "K",
                            includedCheckedBags: {
                                quantity: 1,
                            },
                        },
                        {
                            segmentId: "90",
                            cabin: "ECONOMY",
                            fareBasis: "KLX7IVB9",
                            brandedFare: "ECOBASIC",
                            class: "K",
                            includedCheckedBags: {
                                quantity: 1,
                            },
                        },
                    ],
                },
            ],
        },
        {
            type: "flight-offer",
            id: "31",
            source: "GDS",
            instantTicketingRequired: false,
            nonHomogeneous: false,
            oneWay: false,
            lastTicketingDate: "2023-03-18",
            numberOfBookableSeats: 9,
            itineraries: [
                {
                    duration: "PT19H9M",
                    segments: [
                        {
                            departure: {
                                iataCode: "NRT",
                                terminal: "1",
                                at: "2023-06-20T17:05:00",
                            },
                            arrival: {
                                iataCode: "SFO",
                                terminal: "I",
                                at: "2023-06-20T10:40:00",
                            },
                            carrierCode: "UA",
                            number: "838",
                            aircraft: {
                                code: "777",
                            },
                            operating: {
                                carrierCode: "UA",
                            },
                            duration: "PT9H35M",
                            id: "24",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                        {
                            departure: {
                                iataCode: "SFO",
                                terminal: "3",
                                at: "2023-06-20T18:30:00",
                            },
                            arrival: {
                                iataCode: "LAX",
                                terminal: "7",
                                at: "2023-06-20T20:14:00",
                            },
                            carrierCode: "UA",
                            number: "1200",
                            aircraft: {
                                code: "738",
                            },
                            operating: {
                                carrierCode: "UA",
                            },
                            duration: "PT1H44M",
                            id: "25",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                    ],
                },
            ],
            price: {
                currency: "USD",
                total: "929.35",
                base: "514.00",
                fees: [
                    {
                        amount: "0.00",
                        type: "SUPPLIER",
                    },
                    {
                        amount: "0.00",
                        type: "TICKETING",
                    },
                ],
                grandTotal: "929.35",
            },
            pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
            },
            validatingAirlineCodes: ["UA"],
            travelerPricings: [
                {
                    travelerId: "1",
                    fareOption: "STANDARD",
                    travelerType: "ADULT",
                    price: {
                        currency: "USD",
                        total: "929.35",
                        base: "514.00",
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "24",
                            cabin: "ECONOMY",
                            fareBasis: "KLX7IVB9",
                            brandedFare: "ECOBASIC",
                            class: "K",
                            includedCheckedBags: {
                                quantity: 1,
                            },
                        },
                        {
                            segmentId: "25",
                            cabin: "ECONOMY",
                            fareBasis: "KLX7IVB9",
                            brandedFare: "ECOBASIC",
                            class: "K",
                            includedCheckedBags: {
                                quantity: 1,
                            },
                        },
                    ],
                },
            ],
        },
        {
            type: "flight-offer",
            id: "32",
            source: "GDS",
            instantTicketingRequired: false,
            nonHomogeneous: false,
            oneWay: false,
            lastTicketingDate: "2023-03-18",
            numberOfBookableSeats: 9,
            itineraries: [
                {
                    duration: "PT20H47M",
                    segments: [
                        {
                            departure: {
                                iataCode: "NRT",
                                terminal: "1",
                                at: "2023-06-20T17:05:00",
                            },
                            arrival: {
                                iataCode: "SFO",
                                terminal: "I",
                                at: "2023-06-20T10:40:00",
                            },
                            carrierCode: "UA",
                            number: "838",
                            aircraft: {
                                code: "777",
                            },
                            operating: {
                                carrierCode: "UA",
                            },
                            duration: "PT9H35M",
                            id: "120",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                        {
                            departure: {
                                iataCode: "SFO",
                                terminal: "3",
                                at: "2023-06-20T20:00:00",
                            },
                            arrival: {
                                iataCode: "LAX",
                                terminal: "7",
                                at: "2023-06-20T21:52:00",
                            },
                            carrierCode: "UA",
                            number: "2096",
                            aircraft: {
                                code: "738",
                            },
                            operating: {
                                carrierCode: "UA",
                            },
                            duration: "PT1H52M",
                            id: "121",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                    ],
                },
            ],
            price: {
                currency: "USD",
                total: "929.35",
                base: "514.00",
                fees: [
                    {
                        amount: "0.00",
                        type: "SUPPLIER",
                    },
                    {
                        amount: "0.00",
                        type: "TICKETING",
                    },
                ],
                grandTotal: "929.35",
            },
            pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
            },
            validatingAirlineCodes: ["UA"],
            travelerPricings: [
                {
                    travelerId: "1",
                    fareOption: "STANDARD",
                    travelerType: "ADULT",
                    price: {
                        currency: "USD",
                        total: "929.35",
                        base: "514.00",
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "120",
                            cabin: "ECONOMY",
                            fareBasis: "KLX7IVB9",
                            brandedFare: "ECOBASIC",
                            class: "K",
                            includedCheckedBags: {
                                quantity: 1,
                            },
                        },
                        {
                            segmentId: "121",
                            cabin: "ECONOMY",
                            fareBasis: "KLX7IVB9",
                            brandedFare: "ECOBASIC",
                            class: "K",
                            includedCheckedBags: {
                                quantity: 1,
                            },
                        },
                    ],
                },
            ],
        },
        {
            type: "flight-offer",
            id: "33",
            source: "GDS",
            instantTicketingRequired: false,
            nonHomogeneous: false,
            oneWay: false,
            lastTicketingDate: "2023-03-18",
            numberOfBookableSeats: 9,
            itineraries: [
                {
                    duration: "PT23H25M",
                    segments: [
                        {
                            departure: {
                                iataCode: "NRT",
                                terminal: "1",
                                at: "2023-06-20T17:05:00",
                            },
                            arrival: {
                                iataCode: "SFO",
                                terminal: "I",
                                at: "2023-06-20T10:40:00",
                            },
                            carrierCode: "UA",
                            number: "838",
                            aircraft: {
                                code: "777",
                            },
                            operating: {
                                carrierCode: "UA",
                            },
                            duration: "PT9H35M",
                            id: "67",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                        {
                            departure: {
                                iataCode: "SFO",
                                terminal: "3",
                                at: "2023-06-20T22:46:00",
                            },
                            arrival: {
                                iataCode: "LAX",
                                terminal: "7",
                                at: "2023-06-21T00:30:00",
                            },
                            carrierCode: "UA",
                            number: "1027",
                            aircraft: {
                                code: "7M9",
                            },
                            operating: {
                                carrierCode: "UA",
                            },
                            duration: "PT1H44M",
                            id: "68",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                    ],
                },
            ],
            price: {
                currency: "USD",
                total: "929.35",
                base: "514.00",
                fees: [
                    {
                        amount: "0.00",
                        type: "SUPPLIER",
                    },
                    {
                        amount: "0.00",
                        type: "TICKETING",
                    },
                ],
                grandTotal: "929.35",
            },
            pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
            },
            validatingAirlineCodes: ["UA"],
            travelerPricings: [
                {
                    travelerId: "1",
                    fareOption: "STANDARD",
                    travelerType: "ADULT",
                    price: {
                        currency: "USD",
                        total: "929.35",
                        base: "514.00",
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "67",
                            cabin: "ECONOMY",
                            fareBasis: "KLX7IVB9",
                            brandedFare: "ECOBASIC",
                            class: "K",
                            includedCheckedBags: {
                                quantity: 1,
                            },
                        },
                        {
                            segmentId: "68",
                            cabin: "ECONOMY",
                            fareBasis: "KLX7IVB9",
                            brandedFare: "ECOBASIC",
                            class: "K",
                            includedCheckedBags: {
                                quantity: 1,
                            },
                        },
                    ],
                },
            ],
        },
        {
            type: "flight-offer",
            id: "34",
            source: "GDS",
            instantTicketingRequired: false,
            nonHomogeneous: false,
            oneWay: false,
            lastTicketingDate: "2023-06-20",
            numberOfBookableSeats: 9,
            itineraries: [
                {
                    duration: "PT18H30M",
                    segments: [
                        {
                            departure: {
                                iataCode: "NRT",
                                terminal: "2",
                                at: "2023-06-20T18:20:00",
                            },
                            arrival: {
                                iataCode: "TPE",
                                terminal: "2",
                                at: "2023-06-20T21:10:00",
                            },
                            carrierCode: "CI",
                            number: "105",
                            aircraft: {
                                code: "333",
                            },
                            operating: {
                                carrierCode: "CI",
                            },
                            duration: "PT3H50M",
                            id: "73",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                        {
                            departure: {
                                iataCode: "TPE",
                                terminal: "2",
                                at: "2023-06-20T23:50:00",
                            },
                            arrival: {
                                iataCode: "LAX",
                                terminal: "B",
                                at: "2023-06-20T20:50:00",
                            },
                            carrierCode: "CI",
                            number: "8",
                            aircraft: {
                                code: "77W",
                            },
                            operating: {
                                carrierCode: "CI",
                            },
                            duration: "PT12H",
                            id: "74",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                    ],
                },
            ],
            price: {
                currency: "USD",
                total: "994.65",
                base: "581.00",
                fees: [
                    {
                        amount: "0.00",
                        type: "SUPPLIER",
                    },
                    {
                        amount: "0.00",
                        type: "TICKETING",
                    },
                ],
                grandTotal: "994.65",
            },
            pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
            },
            validatingAirlineCodes: ["CI"],
            travelerPricings: [
                {
                    travelerId: "1",
                    fareOption: "STANDARD",
                    travelerType: "ADULT",
                    price: {
                        currency: "USD",
                        total: "994.65",
                        base: "581.00",
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "73",
                            cabin: "ECONOMY",
                            fareBasis: "TLOJN",
                            class: "T",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                        {
                            segmentId: "74",
                            cabin: "ECONOMY",
                            fareBasis: "TLOJN",
                            class: "T",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                    ],
                },
            ],
        },
        {
            type: "flight-offer",
            id: "35",
            source: "GDS",
            instantTicketingRequired: false,
            nonHomogeneous: false,
            oneWay: false,
            lastTicketingDate: "2023-06-20",
            numberOfBookableSeats: 9,
            itineraries: [
                {
                    duration: "PT22H20M",
                    segments: [
                        {
                            departure: {
                                iataCode: "NRT",
                                terminal: "2",
                                at: "2023-06-20T14:30:00",
                            },
                            arrival: {
                                iataCode: "TPE",
                                terminal: "2",
                                at: "2023-06-20T17:20:00",
                            },
                            carrierCode: "CI",
                            number: "101",
                            aircraft: {
                                code: "77W",
                            },
                            operating: {
                                carrierCode: "CI",
                            },
                            duration: "PT3H50M",
                            id: "49",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                        {
                            departure: {
                                iataCode: "TPE",
                                terminal: "2",
                                at: "2023-06-20T23:50:00",
                            },
                            arrival: {
                                iataCode: "LAX",
                                terminal: "B",
                                at: "2023-06-20T20:50:00",
                            },
                            carrierCode: "CI",
                            number: "8",
                            aircraft: {
                                code: "77W",
                            },
                            operating: {
                                carrierCode: "CI",
                            },
                            duration: "PT12H",
                            id: "50",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                    ],
                },
            ],
            price: {
                currency: "USD",
                total: "994.65",
                base: "581.00",
                fees: [
                    {
                        amount: "0.00",
                        type: "SUPPLIER",
                    },
                    {
                        amount: "0.00",
                        type: "TICKETING",
                    },
                ],
                grandTotal: "994.65",
            },
            pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
            },
            validatingAirlineCodes: ["CI"],
            travelerPricings: [
                {
                    travelerId: "1",
                    fareOption: "STANDARD",
                    travelerType: "ADULT",
                    price: {
                        currency: "USD",
                        total: "994.65",
                        base: "581.00",
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "49",
                            cabin: "ECONOMY",
                            fareBasis: "TLOJN",
                            class: "T",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                        {
                            segmentId: "50",
                            cabin: "ECONOMY",
                            fareBasis: "TLOJN",
                            class: "T",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                    ],
                },
            ],
        },
        {
            type: "flight-offer",
            id: "36",
            source: "GDS",
            instantTicketingRequired: false,
            nonHomogeneous: false,
            oneWay: false,
            lastTicketingDate: "2023-06-20",
            numberOfBookableSeats: 9,
            itineraries: [
                {
                    duration: "PT35H30M",
                    segments: [
                        {
                            departure: {
                                iataCode: "NRT",
                                terminal: "2",
                                at: "2023-06-20T18:20:00",
                            },
                            arrival: {
                                iataCode: "TPE",
                                terminal: "2",
                                at: "2023-06-20T21:10:00",
                            },
                            carrierCode: "CI",
                            number: "105",
                            aircraft: {
                                code: "333",
                            },
                            operating: {
                                carrierCode: "CI",
                            },
                            duration: "PT3H50M",
                            id: "83",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                        {
                            departure: {
                                iataCode: "TPE",
                                terminal: "2",
                                at: "2023-06-21T16:50:00",
                            },
                            arrival: {
                                iataCode: "LAX",
                                terminal: "B",
                                at: "2023-06-21T13:50:00",
                            },
                            carrierCode: "CI",
                            number: "6",
                            aircraft: {
                                code: "359",
                            },
                            operating: {
                                carrierCode: "CI",
                            },
                            duration: "PT12H",
                            id: "84",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                    ],
                },
            ],
            price: {
                currency: "USD",
                total: "994.65",
                base: "581.00",
                fees: [
                    {
                        amount: "0.00",
                        type: "SUPPLIER",
                    },
                    {
                        amount: "0.00",
                        type: "TICKETING",
                    },
                ],
                grandTotal: "994.65",
            },
            pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
            },
            validatingAirlineCodes: ["CI"],
            travelerPricings: [
                {
                    travelerId: "1",
                    fareOption: "STANDARD",
                    travelerType: "ADULT",
                    price: {
                        currency: "USD",
                        total: "994.65",
                        base: "581.00",
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "83",
                            cabin: "ECONOMY",
                            fareBasis: "TLOJN",
                            class: "T",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                        {
                            segmentId: "84",
                            cabin: "ECONOMY",
                            fareBasis: "TLOJN",
                            class: "T",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                    ],
                },
            ],
        },
        {
            type: "flight-offer",
            id: "37",
            source: "GDS",
            instantTicketingRequired: false,
            nonHomogeneous: false,
            oneWay: false,
            lastTicketingDate: "2023-06-20",
            numberOfBookableSeats: 9,
            itineraries: [
                {
                    duration: "PT39H20M",
                    segments: [
                        {
                            departure: {
                                iataCode: "NRT",
                                terminal: "2",
                                at: "2023-06-20T14:30:00",
                            },
                            arrival: {
                                iataCode: "TPE",
                                terminal: "2",
                                at: "2023-06-20T17:20:00",
                            },
                            carrierCode: "CI",
                            number: "101",
                            aircraft: {
                                code: "77W",
                            },
                            operating: {
                                carrierCode: "CI",
                            },
                            duration: "PT3H50M",
                            id: "59",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                        {
                            departure: {
                                iataCode: "TPE",
                                terminal: "2",
                                at: "2023-06-21T16:50:00",
                            },
                            arrival: {
                                iataCode: "LAX",
                                terminal: "B",
                                at: "2023-06-21T13:50:00",
                            },
                            carrierCode: "CI",
                            number: "6",
                            aircraft: {
                                code: "359",
                            },
                            operating: {
                                carrierCode: "CI",
                            },
                            duration: "PT12H",
                            id: "60",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                    ],
                },
            ],
            price: {
                currency: "USD",
                total: "994.65",
                base: "581.00",
                fees: [
                    {
                        amount: "0.00",
                        type: "SUPPLIER",
                    },
                    {
                        amount: "0.00",
                        type: "TICKETING",
                    },
                ],
                grandTotal: "994.65",
            },
            pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
            },
            validatingAirlineCodes: ["CI"],
            travelerPricings: [
                {
                    travelerId: "1",
                    fareOption: "STANDARD",
                    travelerType: "ADULT",
                    price: {
                        currency: "USD",
                        total: "994.65",
                        base: "581.00",
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "59",
                            cabin: "ECONOMY",
                            fareBasis: "TLOJN",
                            class: "T",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                        {
                            segmentId: "60",
                            cabin: "ECONOMY",
                            fareBasis: "TLOJN",
                            class: "T",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                    ],
                },
            ],
        },
        {
            type: "flight-offer",
            id: "38",
            source: "GDS",
            instantTicketingRequired: false,
            nonHomogeneous: false,
            oneWay: false,
            lastTicketingDate: "2023-03-20",
            numberOfBookableSeats: 9,
            itineraries: [
                {
                    duration: "PT16H55M",
                    segments: [
                        {
                            departure: {
                                iataCode: "NRT",
                                terminal: "1",
                                at: "2023-06-20T13:55:00",
                            },
                            arrival: {
                                iataCode: "ICN",
                                terminal: "2",
                                at: "2023-06-20T16:30:00",
                            },
                            carrierCode: "DL",
                            number: "7673",
                            aircraft: {
                                code: "333",
                            },
                            operating: {
                                carrierCode: "KE",
                            },
                            duration: "PT2H35M",
                            id: "130",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                        {
                            departure: {
                                iataCode: "ICN",
                                terminal: "2",
                                at: "2023-06-20T19:40:00",
                            },
                            arrival: {
                                iataCode: "LAX",
                                terminal: "B",
                                at: "2023-06-20T14:50:00",
                            },
                            carrierCode: "DL",
                            number: "9042",
                            aircraft: {
                                code: "74H",
                            },
                            operating: {
                                carrierCode: "KE",
                            },
                            duration: "PT11H10M",
                            id: "131",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                    ],
                },
            ],
            price: {
                currency: "USD",
                total: "1034.35",
                base: "617.00",
                fees: [
                    {
                        amount: "0.00",
                        type: "SUPPLIER",
                    },
                    {
                        amount: "0.00",
                        type: "TICKETING",
                    },
                ],
                grandTotal: "1034.35",
            },
            pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
            },
            validatingAirlineCodes: ["DL"],
            travelerPricings: [
                {
                    travelerId: "1",
                    fareOption: "STANDARD",
                    travelerType: "ADULT",
                    price: {
                        currency: "USD",
                        total: "1034.35",
                        base: "617.00",
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "130",
                            cabin: "ECONOMY",
                            fareBasis: "ULY70AMO",
                            brandedFare: "MAINCABIN",
                            class: "U",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                        {
                            segmentId: "131",
                            cabin: "ECONOMY",
                            fareBasis: "ULY70AMO",
                            brandedFare: "MAINCABIN",
                            class: "U",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                    ],
                },
            ],
        },
        {
            type: "flight-offer",
            id: "39",
            source: "GDS",
            instantTicketingRequired: false,
            nonHomogeneous: false,
            oneWay: false,
            lastTicketingDate: "2023-03-18",
            numberOfBookableSeats: 9,
            itineraries: [
                {
                    duration: "PT18H25M",
                    segments: [
                        {
                            departure: {
                                iataCode: "NRT",
                                terminal: "2",
                                at: "2023-06-20T20:45:00",
                            },
                            arrival: {
                                iataCode: "HNL",
                                terminal: "2",
                                at: "2023-06-20T09:30:00",
                            },
                            carrierCode: "HA",
                            number: "5393",
                            aircraft: {
                                code: "767",
                            },
                            duration: "PT7H45M",
                            id: "65",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                        {
                            departure: {
                                iataCode: "HNL",
                                terminal: "1",
                                at: "2023-06-20T14:40:00",
                            },
                            arrival: {
                                iataCode: "LAX",
                                terminal: "B",
                                at: "2023-06-20T23:10:00",
                            },
                            carrierCode: "HA",
                            number: "2",
                            aircraft: {
                                code: "332",
                            },
                            operating: {
                                carrierCode: "HA",
                            },
                            duration: "PT5H30M",
                            id: "66",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                    ],
                },
            ],
            price: {
                currency: "USD",
                total: "1083.35",
                base: "668.00",
                fees: [
                    {
                        amount: "0.00",
                        type: "SUPPLIER",
                    },
                    {
                        amount: "0.00",
                        type: "TICKETING",
                    },
                ],
                grandTotal: "1083.35",
            },
            pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
            },
            validatingAirlineCodes: ["HA"],
            travelerPricings: [
                {
                    travelerId: "1",
                    fareOption: "STANDARD",
                    travelerType: "ADULT",
                    price: {
                        currency: "USD",
                        total: "1083.35",
                        base: "668.00",
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "65",
                            cabin: "ECONOMY",
                            fareBasis: "NLXIODMJ",
                            brandedFare: "MN",
                            class: "N",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                        {
                            segmentId: "66",
                            cabin: "ECONOMY",
                            fareBasis: "KHF3ODMN",
                            brandedFare: "MN",
                            class: "K",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                    ],
                },
            ],
        },
        {
            type: "flight-offer",
            id: "40",
            source: "GDS",
            instantTicketingRequired: false,
            nonHomogeneous: false,
            oneWay: false,
            lastTicketingDate: "2023-03-18",
            numberOfBookableSeats: 9,
            itineraries: [
                {
                    duration: "PT19H15M",
                    segments: [
                        {
                            departure: {
                                iataCode: "NRT",
                                terminal: "2",
                                at: "2023-06-20T19:55:00",
                            },
                            arrival: {
                                iataCode: "HNL",
                                terminal: "2",
                                at: "2023-06-20T08:25:00",
                            },
                            carrierCode: "HA",
                            number: "822",
                            aircraft: {
                                code: "332",
                            },
                            operating: {
                                carrierCode: "HA",
                            },
                            duration: "PT7H30M",
                            id: "43",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                        {
                            departure: {
                                iataCode: "HNL",
                                terminal: "1",
                                at: "2023-06-20T14:40:00",
                            },
                            arrival: {
                                iataCode: "LAX",
                                terminal: "B",
                                at: "2023-06-20T23:10:00",
                            },
                            carrierCode: "HA",
                            number: "2",
                            aircraft: {
                                code: "332",
                            },
                            operating: {
                                carrierCode: "HA",
                            },
                            duration: "PT5H30M",
                            id: "44",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                    ],
                },
            ],
            price: {
                currency: "USD",
                total: "1083.35",
                base: "668.00",
                fees: [
                    {
                        amount: "0.00",
                        type: "SUPPLIER",
                    },
                    {
                        amount: "0.00",
                        type: "TICKETING",
                    },
                ],
                grandTotal: "1083.35",
            },
            pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
            },
            validatingAirlineCodes: ["HA"],
            travelerPricings: [
                {
                    travelerId: "1",
                    fareOption: "STANDARD",
                    travelerType: "ADULT",
                    price: {
                        currency: "USD",
                        total: "1083.35",
                        base: "668.00",
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "43",
                            cabin: "ECONOMY",
                            fareBasis: "NLXIODMJ",
                            brandedFare: "MN",
                            class: "N",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                        {
                            segmentId: "44",
                            cabin: "ECONOMY",
                            fareBasis: "KHF3ODMN",
                            brandedFare: "MN",
                            class: "K",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                    ],
                },
            ],
        },
        {
            type: "flight-offer",
            id: "41",
            source: "GDS",
            instantTicketingRequired: false,
            nonHomogeneous: false,
            oneWay: false,
            lastTicketingDate: "2023-03-18",
            numberOfBookableSeats: 9,
            itineraries: [
                {
                    duration: "PT25H",
                    segments: [
                        {
                            departure: {
                                iataCode: "NRT",
                                terminal: "2",
                                at: "2023-06-20T20:45:00",
                            },
                            arrival: {
                                iataCode: "HNL",
                                terminal: "2",
                                at: "2023-06-20T09:30:00",
                            },
                            carrierCode: "HA",
                            number: "5393",
                            aircraft: {
                                code: "767",
                            },
                            duration: "PT7H45M",
                            id: "14",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                        {
                            departure: {
                                iataCode: "HNL",
                                terminal: "1",
                                at: "2023-06-20T21:15:00",
                            },
                            arrival: {
                                iataCode: "LAX",
                                terminal: "B",
                                at: "2023-06-21T05:45:00",
                            },
                            carrierCode: "HA",
                            number: "4",
                            aircraft: {
                                code: "332",
                            },
                            operating: {
                                carrierCode: "HA",
                            },
                            duration: "PT5H30M",
                            id: "15",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                    ],
                },
            ],
            price: {
                currency: "USD",
                total: "1083.35",
                base: "668.00",
                fees: [
                    {
                        amount: "0.00",
                        type: "SUPPLIER",
                    },
                    {
                        amount: "0.00",
                        type: "TICKETING",
                    },
                ],
                grandTotal: "1083.35",
            },
            pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
            },
            validatingAirlineCodes: ["HA"],
            travelerPricings: [
                {
                    travelerId: "1",
                    fareOption: "STANDARD",
                    travelerType: "ADULT",
                    price: {
                        currency: "USD",
                        total: "1083.35",
                        base: "668.00",
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "14",
                            cabin: "ECONOMY",
                            fareBasis: "NLXIODMJ",
                            brandedFare: "MN",
                            class: "N",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                        {
                            segmentId: "15",
                            cabin: "ECONOMY",
                            fareBasis: "KHF3ODMN",
                            brandedFare: "MN",
                            class: "K",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                    ],
                },
            ],
        },
        {
            type: "flight-offer",
            id: "42",
            source: "GDS",
            instantTicketingRequired: false,
            nonHomogeneous: false,
            oneWay: false,
            lastTicketingDate: "2023-06-20",
            numberOfBookableSeats: 9,
            itineraries: [
                {
                    duration: "PT18H5M",
                    segments: [
                        {
                            departure: {
                                iataCode: "NRT",
                                terminal: "1",
                                at: "2023-06-20T14:15:00",
                            },
                            arrival: {
                                iataCode: "TPE",
                                terminal: "2",
                                at: "2023-06-20T16:55:00",
                            },
                            carrierCode: "BR",
                            number: "197",
                            aircraft: {
                                code: "781",
                            },
                            operating: {
                                carrierCode: "BR",
                            },
                            duration: "PT3H40M",
                            id: "20",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                        {
                            departure: {
                                iataCode: "TPE",
                                terminal: "2",
                                at: "2023-06-20T19:20:00",
                            },
                            arrival: {
                                iataCode: "LAX",
                                terminal: "B",
                                at: "2023-06-20T16:20:00",
                            },
                            carrierCode: "BR",
                            number: "12",
                            aircraft: {
                                code: "77W",
                            },
                            operating: {
                                carrierCode: "BR",
                            },
                            duration: "PT12H",
                            id: "21",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                    ],
                },
            ],
            price: {
                currency: "USD",
                total: "1086.65",
                base: "676.00",
                fees: [
                    {
                        amount: "0.00",
                        type: "SUPPLIER",
                    },
                    {
                        amount: "0.00",
                        type: "TICKETING",
                    },
                ],
                grandTotal: "1086.65",
            },
            pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
            },
            validatingAirlineCodes: ["BR"],
            travelerPricings: [
                {
                    travelerId: "1",
                    fareOption: "STANDARD",
                    travelerType: "ADULT",
                    price: {
                        currency: "USD",
                        total: "1086.65",
                        base: "676.00",
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "20",
                            cabin: "ECONOMY",
                            fareBasis: "MOTJP",
                            class: "M",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                        {
                            segmentId: "21",
                            cabin: "ECONOMY",
                            fareBasis: "MOTJP",
                            class: "M",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                    ],
                },
            ],
        },
        {
            type: "flight-offer",
            id: "43",
            source: "GDS",
            instantTicketingRequired: false,
            nonHomogeneous: false,
            oneWay: false,
            lastTicketingDate: "2023-06-20",
            numberOfBookableSeats: 9,
            itineraries: [
                {
                    duration: "PT18H55M",
                    segments: [
                        {
                            departure: {
                                iataCode: "NRT",
                                terminal: "1",
                                at: "2023-06-20T13:25:00",
                            },
                            arrival: {
                                iataCode: "TPE",
                                terminal: "2",
                                at: "2023-06-20T16:05:00",
                            },
                            carrierCode: "BR",
                            number: "183",
                            aircraft: {
                                code: "333",
                            },
                            operating: {
                                carrierCode: "BR",
                            },
                            duration: "PT3H40M",
                            id: "132",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                        {
                            departure: {
                                iataCode: "TPE",
                                terminal: "2",
                                at: "2023-06-20T19:20:00",
                            },
                            arrival: {
                                iataCode: "LAX",
                                terminal: "B",
                                at: "2023-06-20T16:20:00",
                            },
                            carrierCode: "BR",
                            number: "12",
                            aircraft: {
                                code: "77W",
                            },
                            operating: {
                                carrierCode: "BR",
                            },
                            duration: "PT12H",
                            id: "133",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                    ],
                },
            ],
            price: {
                currency: "USD",
                total: "1086.65",
                base: "676.00",
                fees: [
                    {
                        amount: "0.00",
                        type: "SUPPLIER",
                    },
                    {
                        amount: "0.00",
                        type: "TICKETING",
                    },
                ],
                grandTotal: "1086.65",
            },
            pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
            },
            validatingAirlineCodes: ["BR"],
            travelerPricings: [
                {
                    travelerId: "1",
                    fareOption: "STANDARD",
                    travelerType: "ADULT",
                    price: {
                        currency: "USD",
                        total: "1086.65",
                        base: "676.00",
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "132",
                            cabin: "ECONOMY",
                            fareBasis: "MOTJP",
                            class: "M",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                        {
                            segmentId: "133",
                            cabin: "ECONOMY",
                            fareBasis: "MOTJP",
                            class: "M",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                    ],
                },
            ],
        },
        {
            type: "flight-offer",
            id: "44",
            source: "GDS",
            instantTicketingRequired: false,
            nonHomogeneous: false,
            oneWay: false,
            lastTicketingDate: "2023-06-20",
            numberOfBookableSeats: 9,
            itineraries: [
                {
                    duration: "PT22H40M",
                    segments: [
                        {
                            departure: {
                                iataCode: "NRT",
                                terminal: "1",
                                at: "2023-06-20T14:15:00",
                            },
                            arrival: {
                                iataCode: "TPE",
                                terminal: "2",
                                at: "2023-06-20T16:55:00",
                            },
                            carrierCode: "BR",
                            number: "197",
                            aircraft: {
                                code: "781",
                            },
                            operating: {
                                carrierCode: "BR",
                            },
                            duration: "PT3H40M",
                            id: "104",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                        {
                            departure: {
                                iataCode: "TPE",
                                terminal: "2",
                                at: "2023-06-20T23:55:00",
                            },
                            arrival: {
                                iataCode: "LAX",
                                terminal: "B",
                                at: "2023-06-20T20:55:00",
                            },
                            carrierCode: "BR",
                            number: "16",
                            aircraft: {
                                code: "77W",
                            },
                            operating: {
                                carrierCode: "BR",
                            },
                            duration: "PT12H",
                            id: "105",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                    ],
                },
            ],
            price: {
                currency: "USD",
                total: "1086.65",
                base: "676.00",
                fees: [
                    {
                        amount: "0.00",
                        type: "SUPPLIER",
                    },
                    {
                        amount: "0.00",
                        type: "TICKETING",
                    },
                ],
                grandTotal: "1086.65",
            },
            pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
            },
            validatingAirlineCodes: ["BR"],
            travelerPricings: [
                {
                    travelerId: "1",
                    fareOption: "STANDARD",
                    travelerType: "ADULT",
                    price: {
                        currency: "USD",
                        total: "1086.65",
                        base: "676.00",
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "104",
                            cabin: "ECONOMY",
                            fareBasis: "MOTJP",
                            class: "M",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                        {
                            segmentId: "105",
                            cabin: "ECONOMY",
                            fareBasis: "MOTJP",
                            class: "M",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                    ],
                },
            ],
        },
        {
            type: "flight-offer",
            id: "45",
            source: "GDS",
            instantTicketingRequired: false,
            nonHomogeneous: false,
            oneWay: false,
            lastTicketingDate: "2023-06-20",
            numberOfBookableSeats: 9,
            itineraries: [
                {
                    duration: "PT23H30M",
                    segments: [
                        {
                            departure: {
                                iataCode: "NRT",
                                terminal: "1",
                                at: "2023-06-20T13:25:00",
                            },
                            arrival: {
                                iataCode: "TPE",
                                terminal: "2",
                                at: "2023-06-20T16:05:00",
                            },
                            carrierCode: "BR",
                            number: "183",
                            aircraft: {
                                code: "333",
                            },
                            operating: {
                                carrierCode: "BR",
                            },
                            duration: "PT3H40M",
                            id: "77",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                        {
                            departure: {
                                iataCode: "TPE",
                                terminal: "2",
                                at: "2023-06-20T23:55:00",
                            },
                            arrival: {
                                iataCode: "LAX",
                                terminal: "B",
                                at: "2023-06-20T20:55:00",
                            },
                            carrierCode: "BR",
                            number: "16",
                            aircraft: {
                                code: "77W",
                            },
                            operating: {
                                carrierCode: "BR",
                            },
                            duration: "PT12H",
                            id: "78",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                    ],
                },
            ],
            price: {
                currency: "USD",
                total: "1086.65",
                base: "676.00",
                fees: [
                    {
                        amount: "0.00",
                        type: "SUPPLIER",
                    },
                    {
                        amount: "0.00",
                        type: "TICKETING",
                    },
                ],
                grandTotal: "1086.65",
            },
            pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
            },
            validatingAirlineCodes: ["BR"],
            travelerPricings: [
                {
                    travelerId: "1",
                    fareOption: "STANDARD",
                    travelerType: "ADULT",
                    price: {
                        currency: "USD",
                        total: "1086.65",
                        base: "676.00",
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "77",
                            cabin: "ECONOMY",
                            fareBasis: "MOTJP",
                            class: "M",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                        {
                            segmentId: "78",
                            cabin: "ECONOMY",
                            fareBasis: "MOTJP",
                            class: "M",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                    ],
                },
            ],
        },
        {
            type: "flight-offer",
            id: "46",
            source: "GDS",
            instantTicketingRequired: false,
            nonHomogeneous: false,
            oneWay: false,
            lastTicketingDate: "2023-06-20",
            numberOfBookableSeats: 9,
            itineraries: [
                {
                    duration: "PT26H30M",
                    segments: [
                        {
                            departure: {
                                iataCode: "NRT",
                                terminal: "1",
                                at: "2023-06-20T20:40:00",
                            },
                            arrival: {
                                iataCode: "TPE",
                                terminal: "2",
                                at: "2023-06-20T23:20:00",
                            },
                            carrierCode: "BR",
                            number: "195",
                            aircraft: {
                                code: "333",
                            },
                            operating: {
                                carrierCode: "BR",
                            },
                            duration: "PT3H40M",
                            id: "79",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                        {
                            departure: {
                                iataCode: "TPE",
                                terminal: "2",
                                at: "2023-06-21T10:10:00",
                            },
                            arrival: {
                                iataCode: "LAX",
                                terminal: "B",
                                at: "2023-06-21T07:10:00",
                            },
                            carrierCode: "BR",
                            number: "6",
                            aircraft: {
                                code: "77W",
                            },
                            operating: {
                                carrierCode: "BR",
                            },
                            duration: "PT12H",
                            id: "80",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                    ],
                },
            ],
            price: {
                currency: "USD",
                total: "1086.65",
                base: "676.00",
                fees: [
                    {
                        amount: "0.00",
                        type: "SUPPLIER",
                    },
                    {
                        amount: "0.00",
                        type: "TICKETING",
                    },
                ],
                grandTotal: "1086.65",
            },
            pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
            },
            validatingAirlineCodes: ["BR"],
            travelerPricings: [
                {
                    travelerId: "1",
                    fareOption: "STANDARD",
                    travelerType: "ADULT",
                    price: {
                        currency: "USD",
                        total: "1086.65",
                        base: "676.00",
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "79",
                            cabin: "ECONOMY",
                            fareBasis: "MOTJP",
                            class: "M",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                        {
                            segmentId: "80",
                            cabin: "ECONOMY",
                            fareBasis: "MOTJP",
                            class: "M",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                    ],
                },
            ],
        },
        {
            type: "flight-offer",
            id: "47",
            source: "GDS",
            instantTicketingRequired: false,
            nonHomogeneous: false,
            oneWay: false,
            lastTicketingDate: "2023-06-20",
            numberOfBookableSeats: 9,
            itineraries: [
                {
                    duration: "PT32H55M",
                    segments: [
                        {
                            departure: {
                                iataCode: "NRT",
                                terminal: "1",
                                at: "2023-06-20T14:15:00",
                            },
                            arrival: {
                                iataCode: "TPE",
                                terminal: "2",
                                at: "2023-06-20T16:55:00",
                            },
                            carrierCode: "BR",
                            number: "197",
                            aircraft: {
                                code: "781",
                            },
                            operating: {
                                carrierCode: "BR",
                            },
                            duration: "PT3H40M",
                            id: "140",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                        {
                            departure: {
                                iataCode: "TPE",
                                terminal: "2",
                                at: "2023-06-21T10:10:00",
                            },
                            arrival: {
                                iataCode: "LAX",
                                terminal: "B",
                                at: "2023-06-21T07:10:00",
                            },
                            carrierCode: "BR",
                            number: "6",
                            aircraft: {
                                code: "77W",
                            },
                            operating: {
                                carrierCode: "BR",
                            },
                            duration: "PT12H",
                            id: "141",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                    ],
                },
            ],
            price: {
                currency: "USD",
                total: "1086.65",
                base: "676.00",
                fees: [
                    {
                        amount: "0.00",
                        type: "SUPPLIER",
                    },
                    {
                        amount: "0.00",
                        type: "TICKETING",
                    },
                ],
                grandTotal: "1086.65",
            },
            pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
            },
            validatingAirlineCodes: ["BR"],
            travelerPricings: [
                {
                    travelerId: "1",
                    fareOption: "STANDARD",
                    travelerType: "ADULT",
                    price: {
                        currency: "USD",
                        total: "1086.65",
                        base: "676.00",
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "140",
                            cabin: "ECONOMY",
                            fareBasis: "MOTJP",
                            class: "M",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                        {
                            segmentId: "141",
                            cabin: "ECONOMY",
                            fareBasis: "MOTJP",
                            class: "M",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                    ],
                },
            ],
        },
        {
            type: "flight-offer",
            id: "48",
            source: "GDS",
            instantTicketingRequired: false,
            nonHomogeneous: false,
            oneWay: false,
            lastTicketingDate: "2023-06-20",
            numberOfBookableSeats: 9,
            itineraries: [
                {
                    duration: "PT33H45M",
                    segments: [
                        {
                            departure: {
                                iataCode: "NRT",
                                terminal: "1",
                                at: "2023-06-20T13:25:00",
                            },
                            arrival: {
                                iataCode: "TPE",
                                terminal: "2",
                                at: "2023-06-20T16:05:00",
                            },
                            carrierCode: "BR",
                            number: "183",
                            aircraft: {
                                code: "333",
                            },
                            operating: {
                                carrierCode: "BR",
                            },
                            duration: "PT3H40M",
                            id: "114",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                        {
                            departure: {
                                iataCode: "TPE",
                                terminal: "2",
                                at: "2023-06-21T10:10:00",
                            },
                            arrival: {
                                iataCode: "LAX",
                                terminal: "B",
                                at: "2023-06-21T07:10:00",
                            },
                            carrierCode: "BR",
                            number: "6",
                            aircraft: {
                                code: "77W",
                            },
                            operating: {
                                carrierCode: "BR",
                            },
                            duration: "PT12H",
                            id: "115",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                    ],
                },
            ],
            price: {
                currency: "USD",
                total: "1086.65",
                base: "676.00",
                fees: [
                    {
                        amount: "0.00",
                        type: "SUPPLIER",
                    },
                    {
                        amount: "0.00",
                        type: "TICKETING",
                    },
                ],
                grandTotal: "1086.65",
            },
            pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
            },
            validatingAirlineCodes: ["BR"],
            travelerPricings: [
                {
                    travelerId: "1",
                    fareOption: "STANDARD",
                    travelerType: "ADULT",
                    price: {
                        currency: "USD",
                        total: "1086.65",
                        base: "676.00",
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "114",
                            cabin: "ECONOMY",
                            fareBasis: "MOTJP",
                            class: "M",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                        {
                            segmentId: "115",
                            cabin: "ECONOMY",
                            fareBasis: "MOTJP",
                            class: "M",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                    ],
                },
            ],
        },
        {
            type: "flight-offer",
            id: "49",
            source: "GDS",
            instantTicketingRequired: false,
            nonHomogeneous: false,
            oneWay: false,
            lastTicketingDate: "2023-03-18",
            numberOfBookableSeats: 9,
            itineraries: [
                {
                    duration: "PT25H50M",
                    segments: [
                        {
                            departure: {
                                iataCode: "NRT",
                                terminal: "2",
                                at: "2023-06-20T19:55:00",
                            },
                            arrival: {
                                iataCode: "HNL",
                                terminal: "2",
                                at: "2023-06-20T08:25:00",
                            },
                            carrierCode: "HA",
                            number: "822",
                            aircraft: {
                                code: "332",
                            },
                            operating: {
                                carrierCode: "HA",
                            },
                            duration: "PT7H30M",
                            id: "126",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                        {
                            departure: {
                                iataCode: "HNL",
                                terminal: "1",
                                at: "2023-06-20T21:15:00",
                            },
                            arrival: {
                                iataCode: "LAX",
                                terminal: "B",
                                at: "2023-06-21T05:45:00",
                            },
                            carrierCode: "HA",
                            number: "4",
                            aircraft: {
                                code: "332",
                            },
                            operating: {
                                carrierCode: "HA",
                            },
                            duration: "PT5H30M",
                            id: "127",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                    ],
                },
            ],
            price: {
                currency: "USD",
                total: "1093.95",
                base: "668.00",
                fees: [
                    {
                        amount: "0.00",
                        type: "SUPPLIER",
                    },
                    {
                        amount: "0.00",
                        type: "TICKETING",
                    },
                ],
                grandTotal: "1093.95",
            },
            pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
            },
            validatingAirlineCodes: ["HA"],
            travelerPricings: [
                {
                    travelerId: "1",
                    fareOption: "STANDARD",
                    travelerType: "ADULT",
                    price: {
                        currency: "USD",
                        total: "1093.95",
                        base: "668.00",
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "126",
                            cabin: "ECONOMY",
                            fareBasis: "NLXIODMJ",
                            brandedFare: "MN",
                            class: "N",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                        {
                            segmentId: "127",
                            cabin: "ECONOMY",
                            fareBasis: "KHF3ODMN",
                            brandedFare: "MN",
                            class: "K",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                    ],
                },
            ],
        },
        {
            type: "flight-offer",
            id: "50",
            source: "GDS",
            instantTicketingRequired: false,
            nonHomogeneous: false,
            oneWay: false,
            lastTicketingDate: "2023-03-18",
            numberOfBookableSeats: 9,
            itineraries: [
                {
                    duration: "PT35H35M",
                    segments: [
                        {
                            departure: {
                                iataCode: "NRT",
                                terminal: "2",
                                at: "2023-06-20T20:45:00",
                            },
                            arrival: {
                                iataCode: "HNL",
                                terminal: "2",
                                at: "2023-06-20T09:30:00",
                            },
                            carrierCode: "HA",
                            number: "5393",
                            aircraft: {
                                code: "767",
                            },
                            duration: "PT7H45M",
                            id: "95",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                        {
                            departure: {
                                iataCode: "HNL",
                                terminal: "1",
                                at: "2023-06-21T07:50:00",
                            },
                            arrival: {
                                iataCode: "LAX",
                                terminal: "B",
                                at: "2023-06-21T16:20:00",
                            },
                            carrierCode: "HA",
                            number: "10",
                            aircraft: {
                                code: "332",
                            },
                            operating: {
                                carrierCode: "HA",
                            },
                            duration: "PT5H30M",
                            id: "96",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                    ],
                },
            ],
            price: {
                currency: "USD",
                total: "1093.95",
                base: "668.00",
                fees: [
                    {
                        amount: "0.00",
                        type: "SUPPLIER",
                    },
                    {
                        amount: "0.00",
                        type: "TICKETING",
                    },
                ],
                grandTotal: "1093.95",
            },
            pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
            },
            validatingAirlineCodes: ["HA"],
            travelerPricings: [
                {
                    travelerId: "1",
                    fareOption: "STANDARD",
                    travelerType: "ADULT",
                    price: {
                        currency: "USD",
                        total: "1093.95",
                        base: "668.00",
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "95",
                            cabin: "ECONOMY",
                            fareBasis: "NLXIODMJ",
                            brandedFare: "MN",
                            class: "N",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                        {
                            segmentId: "96",
                            cabin: "ECONOMY",
                            fareBasis: "KHF3ODMN",
                            brandedFare: "MN",
                            class: "K",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                    ],
                },
            ],
        },
        {
            type: "flight-offer",
            id: "51",
            source: "GDS",
            instantTicketingRequired: false,
            nonHomogeneous: false,
            oneWay: false,
            lastTicketingDate: "2023-03-18",
            numberOfBookableSeats: 9,
            itineraries: [
                {
                    duration: "PT36H25M",
                    segments: [
                        {
                            departure: {
                                iataCode: "NRT",
                                terminal: "2",
                                at: "2023-06-20T19:55:00",
                            },
                            arrival: {
                                iataCode: "HNL",
                                terminal: "2",
                                at: "2023-06-20T08:25:00",
                            },
                            carrierCode: "HA",
                            number: "822",
                            aircraft: {
                                code: "332",
                            },
                            operating: {
                                carrierCode: "HA",
                            },
                            duration: "PT7H30M",
                            id: "69",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                        {
                            departure: {
                                iataCode: "HNL",
                                terminal: "1",
                                at: "2023-06-21T07:50:00",
                            },
                            arrival: {
                                iataCode: "LAX",
                                terminal: "B",
                                at: "2023-06-21T16:20:00",
                            },
                            carrierCode: "HA",
                            number: "10",
                            aircraft: {
                                code: "332",
                            },
                            operating: {
                                carrierCode: "HA",
                            },
                            duration: "PT5H30M",
                            id: "70",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                    ],
                },
            ],
            price: {
                currency: "USD",
                total: "1093.95",
                base: "668.00",
                fees: [
                    {
                        amount: "0.00",
                        type: "SUPPLIER",
                    },
                    {
                        amount: "0.00",
                        type: "TICKETING",
                    },
                ],
                grandTotal: "1093.95",
            },
            pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
            },
            validatingAirlineCodes: ["HA"],
            travelerPricings: [
                {
                    travelerId: "1",
                    fareOption: "STANDARD",
                    travelerType: "ADULT",
                    price: {
                        currency: "USD",
                        total: "1093.95",
                        base: "668.00",
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "69",
                            cabin: "ECONOMY",
                            fareBasis: "NLXIODMJ",
                            brandedFare: "MN",
                            class: "N",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                        {
                            segmentId: "70",
                            cabin: "ECONOMY",
                            fareBasis: "KHF3ODMN",
                            brandedFare: "MN",
                            class: "K",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                    ],
                },
            ],
        },
        {
            type: "flight-offer",
            id: "52",
            source: "GDS",
            instantTicketingRequired: false,
            nonHomogeneous: false,
            oneWay: false,
            lastTicketingDate: "2023-03-18",
            numberOfBookableSeats: 9,
            itineraries: [
                {
                    duration: "PT16H25M",
                    segments: [
                        {
                            departure: {
                                iataCode: "NRT",
                                terminal: "2",
                                at: "2023-06-20T20:45:00",
                            },
                            arrival: {
                                iataCode: "HNL",
                                terminal: "2",
                                at: "2023-06-20T09:30:00",
                            },
                            carrierCode: "HA",
                            number: "5393",
                            aircraft: {
                                code: "767",
                            },
                            duration: "PT7H45M",
                            id: "63",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                        {
                            departure: {
                                iataCode: "HNL",
                                terminal: "1",
                                at: "2023-06-20T12:35:00",
                            },
                            arrival: {
                                iataCode: "ONT",
                                terminal: "4",
                                at: "2023-06-20T21:10:00",
                            },
                            carrierCode: "HA",
                            number: "80",
                            aircraft: {
                                code: "321",
                            },
                            operating: {
                                carrierCode: "HA",
                            },
                            duration: "PT5H35M",
                            id: "64",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                    ],
                },
            ],
            price: {
                currency: "USD",
                total: "1116.35",
                base: "701.00",
                fees: [
                    {
                        amount: "0.00",
                        type: "SUPPLIER",
                    },
                    {
                        amount: "0.00",
                        type: "TICKETING",
                    },
                ],
                grandTotal: "1116.35",
            },
            pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
            },
            validatingAirlineCodes: ["HA"],
            travelerPricings: [
                {
                    travelerId: "1",
                    fareOption: "STANDARD",
                    travelerType: "ADULT",
                    price: {
                        currency: "USD",
                        total: "1116.35",
                        base: "701.00",
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "63",
                            cabin: "ECONOMY",
                            fareBasis: "NLXIODMJ",
                            brandedFare: "MN",
                            class: "N",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                        {
                            segmentId: "64",
                            cabin: "ECONOMY",
                            fareBasis: "KHF3ODMN",
                            brandedFare: "MN",
                            class: "K",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                    ],
                },
            ],
        },
        {
            type: "flight-offer",
            id: "53",
            source: "GDS",
            instantTicketingRequired: false,
            nonHomogeneous: false,
            oneWay: false,
            lastTicketingDate: "2023-03-18",
            numberOfBookableSeats: 9,
            itineraries: [
                {
                    duration: "PT17H15M",
                    segments: [
                        {
                            departure: {
                                iataCode: "NRT",
                                terminal: "2",
                                at: "2023-06-20T19:55:00",
                            },
                            arrival: {
                                iataCode: "HNL",
                                terminal: "2",
                                at: "2023-06-20T08:25:00",
                            },
                            carrierCode: "HA",
                            number: "822",
                            aircraft: {
                                code: "332",
                            },
                            operating: {
                                carrierCode: "HA",
                            },
                            duration: "PT7H30M",
                            id: "41",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                        {
                            departure: {
                                iataCode: "HNL",
                                terminal: "1",
                                at: "2023-06-20T12:35:00",
                            },
                            arrival: {
                                iataCode: "ONT",
                                terminal: "4",
                                at: "2023-06-20T21:10:00",
                            },
                            carrierCode: "HA",
                            number: "80",
                            aircraft: {
                                code: "321",
                            },
                            operating: {
                                carrierCode: "HA",
                            },
                            duration: "PT5H35M",
                            id: "42",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                    ],
                },
            ],
            price: {
                currency: "USD",
                total: "1116.35",
                base: "701.00",
                fees: [
                    {
                        amount: "0.00",
                        type: "SUPPLIER",
                    },
                    {
                        amount: "0.00",
                        type: "TICKETING",
                    },
                ],
                grandTotal: "1116.35",
            },
            pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
            },
            validatingAirlineCodes: ["HA"],
            travelerPricings: [
                {
                    travelerId: "1",
                    fareOption: "STANDARD",
                    travelerType: "ADULT",
                    price: {
                        currency: "USD",
                        total: "1116.35",
                        base: "701.00",
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "41",
                            cabin: "ECONOMY",
                            fareBasis: "NLXIODMJ",
                            brandedFare: "MN",
                            class: "N",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                        {
                            segmentId: "42",
                            cabin: "ECONOMY",
                            fareBasis: "KHF3ODMN",
                            brandedFare: "MN",
                            class: "K",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                    ],
                },
            ],
        },
        {
            type: "flight-offer",
            id: "54",
            source: "GDS",
            instantTicketingRequired: false,
            nonHomogeneous: false,
            oneWay: false,
            lastTicketingDate: "2023-03-18",
            numberOfBookableSeats: 9,
            itineraries: [
                {
                    duration: "PT19H10M",
                    segments: [
                        {
                            departure: {
                                iataCode: "NRT",
                                terminal: "2",
                                at: "2023-06-20T20:45:00",
                            },
                            arrival: {
                                iataCode: "HNL",
                                terminal: "2",
                                at: "2023-06-20T09:30:00",
                            },
                            carrierCode: "HA",
                            number: "5393",
                            aircraft: {
                                code: "767",
                            },
                            duration: "PT7H45M",
                            id: "31",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                        {
                            departure: {
                                iataCode: "HNL",
                                terminal: "1",
                                at: "2023-06-20T11:35:00",
                            },
                            arrival: {
                                iataCode: "KOA",
                                at: "2023-06-20T12:24:00",
                            },
                            carrierCode: "HA",
                            number: "258",
                            aircraft: {
                                code: "717",
                            },
                            operating: {
                                carrierCode: "HA",
                            },
                            duration: "PT49M",
                            id: "32",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                        {
                            departure: {
                                iataCode: "KOA",
                                at: "2023-06-20T15:25:00",
                            },
                            arrival: {
                                iataCode: "LAX",
                                terminal: "B",
                                at: "2023-06-20T23:55:00",
                            },
                            carrierCode: "HA",
                            number: "62",
                            aircraft: {
                                code: "321",
                            },
                            operating: {
                                carrierCode: "HA",
                            },
                            duration: "PT5H30M",
                            id: "33",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                    ],
                },
            ],
            price: {
                currency: "USD",
                total: "1140.35",
                base: "725.00",
                fees: [
                    {
                        amount: "0.00",
                        type: "SUPPLIER",
                    },
                    {
                        amount: "0.00",
                        type: "TICKETING",
                    },
                ],
                grandTotal: "1140.35",
            },
            pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
            },
            validatingAirlineCodes: ["HA"],
            travelerPricings: [
                {
                    travelerId: "1",
                    fareOption: "STANDARD",
                    travelerType: "ADULT",
                    price: {
                        currency: "USD",
                        total: "1140.35",
                        base: "725.00",
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "31",
                            cabin: "ECONOMY",
                            fareBasis: "NLXIODMJ",
                            brandedFare: "MN",
                            class: "N",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                        {
                            segmentId: "32",
                            cabin: "ECONOMY",
                            fareBasis: "KHX0ODMN",
                            brandedFare: "MN",
                            class: "K",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                        {
                            segmentId: "33",
                            cabin: "ECONOMY",
                            fareBasis: "KHX0ODMN",
                            brandedFare: "MN",
                            class: "K",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                    ],
                },
            ],
        },
        {
            type: "flight-offer",
            id: "55",
            source: "GDS",
            instantTicketingRequired: false,
            nonHomogeneous: false,
            oneWay: false,
            lastTicketingDate: "2023-03-18",
            numberOfBookableSeats: 9,
            itineraries: [
                {
                    duration: "PT19H10M",
                    segments: [
                        {
                            departure: {
                                iataCode: "NRT",
                                terminal: "2",
                                at: "2023-06-20T20:45:00",
                            },
                            arrival: {
                                iataCode: "HNL",
                                terminal: "2",
                                at: "2023-06-20T09:30:00",
                            },
                            carrierCode: "HA",
                            number: "5393",
                            aircraft: {
                                code: "767",
                            },
                            duration: "PT7H45M",
                            id: "34",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                        {
                            departure: {
                                iataCode: "HNL",
                                terminal: "1",
                                at: "2023-06-20T12:45:00",
                            },
                            arrival: {
                                iataCode: "KOA",
                                at: "2023-06-20T13:34:00",
                            },
                            carrierCode: "HA",
                            number: "288",
                            aircraft: {
                                code: "717",
                            },
                            operating: {
                                carrierCode: "HA",
                            },
                            duration: "PT49M",
                            id: "35",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                        {
                            departure: {
                                iataCode: "KOA",
                                at: "2023-06-20T15:25:00",
                            },
                            arrival: {
                                iataCode: "LAX",
                                terminal: "B",
                                at: "2023-06-20T23:55:00",
                            },
                            carrierCode: "HA",
                            number: "62",
                            aircraft: {
                                code: "321",
                            },
                            operating: {
                                carrierCode: "HA",
                            },
                            duration: "PT5H30M",
                            id: "36",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                    ],
                },
            ],
            price: {
                currency: "USD",
                total: "1140.35",
                base: "725.00",
                fees: [
                    {
                        amount: "0.00",
                        type: "SUPPLIER",
                    },
                    {
                        amount: "0.00",
                        type: "TICKETING",
                    },
                ],
                grandTotal: "1140.35",
            },
            pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
            },
            validatingAirlineCodes: ["HA"],
            travelerPricings: [
                {
                    travelerId: "1",
                    fareOption: "STANDARD",
                    travelerType: "ADULT",
                    price: {
                        currency: "USD",
                        total: "1140.35",
                        base: "725.00",
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "34",
                            cabin: "ECONOMY",
                            fareBasis: "NLXIODMJ",
                            brandedFare: "MN",
                            class: "N",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                        {
                            segmentId: "35",
                            cabin: "ECONOMY",
                            fareBasis: "KHX0ODMN",
                            brandedFare: "MN",
                            class: "K",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                        {
                            segmentId: "36",
                            cabin: "ECONOMY",
                            fareBasis: "KHX0ODMN",
                            brandedFare: "MN",
                            class: "K",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                    ],
                },
            ],
        },
        {
            type: "flight-offer",
            id: "56",
            source: "GDS",
            instantTicketingRequired: false,
            nonHomogeneous: false,
            oneWay: false,
            lastTicketingDate: "2023-03-18",
            numberOfBookableSeats: 9,
            itineraries: [
                {
                    duration: "PT20H",
                    segments: [
                        {
                            departure: {
                                iataCode: "NRT",
                                terminal: "2",
                                at: "2023-06-20T19:55:00",
                            },
                            arrival: {
                                iataCode: "HNL",
                                terminal: "2",
                                at: "2023-06-20T08:25:00",
                            },
                            carrierCode: "HA",
                            number: "822",
                            aircraft: {
                                code: "332",
                            },
                            operating: {
                                carrierCode: "HA",
                            },
                            duration: "PT7H30M",
                            id: "3",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                        {
                            departure: {
                                iataCode: "HNL",
                                terminal: "1",
                                at: "2023-06-20T10:50:00",
                            },
                            arrival: {
                                iataCode: "KOA",
                                at: "2023-06-20T11:39:00",
                            },
                            carrierCode: "HA",
                            number: "238",
                            aircraft: {
                                code: "717",
                            },
                            operating: {
                                carrierCode: "HA",
                            },
                            duration: "PT49M",
                            id: "4",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                        {
                            departure: {
                                iataCode: "KOA",
                                at: "2023-06-20T15:25:00",
                            },
                            arrival: {
                                iataCode: "LAX",
                                terminal: "B",
                                at: "2023-06-20T23:55:00",
                            },
                            carrierCode: "HA",
                            number: "62",
                            aircraft: {
                                code: "321",
                            },
                            operating: {
                                carrierCode: "HA",
                            },
                            duration: "PT5H30M",
                            id: "5",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                    ],
                },
            ],
            price: {
                currency: "USD",
                total: "1140.35",
                base: "725.00",
                fees: [
                    {
                        amount: "0.00",
                        type: "SUPPLIER",
                    },
                    {
                        amount: "0.00",
                        type: "TICKETING",
                    },
                ],
                grandTotal: "1140.35",
            },
            pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
            },
            validatingAirlineCodes: ["HA"],
            travelerPricings: [
                {
                    travelerId: "1",
                    fareOption: "STANDARD",
                    travelerType: "ADULT",
                    price: {
                        currency: "USD",
                        total: "1140.35",
                        base: "725.00",
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "3",
                            cabin: "ECONOMY",
                            fareBasis: "NLXIODMJ",
                            brandedFare: "MN",
                            class: "N",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                        {
                            segmentId: "4",
                            cabin: "ECONOMY",
                            fareBasis: "KHX0ODMN",
                            brandedFare: "MN",
                            class: "K",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                        {
                            segmentId: "5",
                            cabin: "ECONOMY",
                            fareBasis: "KHX0ODMN",
                            brandedFare: "MN",
                            class: "K",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                    ],
                },
            ],
        },
        {
            type: "flight-offer",
            id: "57",
            source: "GDS",
            instantTicketingRequired: false,
            nonHomogeneous: false,
            oneWay: false,
            lastTicketingDate: "2023-03-18",
            numberOfBookableSeats: 9,
            itineraries: [
                {
                    duration: "PT20H",
                    segments: [
                        {
                            departure: {
                                iataCode: "NRT",
                                terminal: "2",
                                at: "2023-06-20T19:55:00",
                            },
                            arrival: {
                                iataCode: "HNL",
                                terminal: "2",
                                at: "2023-06-20T08:25:00",
                            },
                            carrierCode: "HA",
                            number: "822",
                            aircraft: {
                                code: "332",
                            },
                            operating: {
                                carrierCode: "HA",
                            },
                            duration: "PT7H30M",
                            id: "6",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                        {
                            departure: {
                                iataCode: "HNL",
                                terminal: "1",
                                at: "2023-06-20T11:35:00",
                            },
                            arrival: {
                                iataCode: "KOA",
                                at: "2023-06-20T12:24:00",
                            },
                            carrierCode: "HA",
                            number: "258",
                            aircraft: {
                                code: "717",
                            },
                            operating: {
                                carrierCode: "HA",
                            },
                            duration: "PT49M",
                            id: "7",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                        {
                            departure: {
                                iataCode: "KOA",
                                at: "2023-06-20T15:25:00",
                            },
                            arrival: {
                                iataCode: "LAX",
                                terminal: "B",
                                at: "2023-06-20T23:55:00",
                            },
                            carrierCode: "HA",
                            number: "62",
                            aircraft: {
                                code: "321",
                            },
                            operating: {
                                carrierCode: "HA",
                            },
                            duration: "PT5H30M",
                            id: "8",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                    ],
                },
            ],
            price: {
                currency: "USD",
                total: "1140.35",
                base: "725.00",
                fees: [
                    {
                        amount: "0.00",
                        type: "SUPPLIER",
                    },
                    {
                        amount: "0.00",
                        type: "TICKETING",
                    },
                ],
                grandTotal: "1140.35",
            },
            pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
            },
            validatingAirlineCodes: ["HA"],
            travelerPricings: [
                {
                    travelerId: "1",
                    fareOption: "STANDARD",
                    travelerType: "ADULT",
                    price: {
                        currency: "USD",
                        total: "1140.35",
                        base: "725.00",
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "6",
                            cabin: "ECONOMY",
                            fareBasis: "NLXIODMJ",
                            brandedFare: "MN",
                            class: "N",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                        {
                            segmentId: "7",
                            cabin: "ECONOMY",
                            fareBasis: "KHX0ODMN",
                            brandedFare: "MN",
                            class: "K",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                        {
                            segmentId: "8",
                            cabin: "ECONOMY",
                            fareBasis: "KHX0ODMN",
                            brandedFare: "MN",
                            class: "K",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                    ],
                },
            ],
        },
        {
            type: "flight-offer",
            id: "58",
            source: "GDS",
            instantTicketingRequired: false,
            nonHomogeneous: false,
            oneWay: false,
            lastTicketingDate: "2023-03-18",
            numberOfBookableSeats: 9,
            itineraries: [
                {
                    duration: "PT20H",
                    segments: [
                        {
                            departure: {
                                iataCode: "NRT",
                                terminal: "2",
                                at: "2023-06-20T19:55:00",
                            },
                            arrival: {
                                iataCode: "HNL",
                                terminal: "2",
                                at: "2023-06-20T08:25:00",
                            },
                            carrierCode: "HA",
                            number: "822",
                            aircraft: {
                                code: "332",
                            },
                            operating: {
                                carrierCode: "HA",
                            },
                            duration: "PT7H30M",
                            id: "9",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                        {
                            departure: {
                                iataCode: "HNL",
                                terminal: "1",
                                at: "2023-06-20T12:45:00",
                            },
                            arrival: {
                                iataCode: "KOA",
                                at: "2023-06-20T13:34:00",
                            },
                            carrierCode: "HA",
                            number: "288",
                            aircraft: {
                                code: "717",
                            },
                            operating: {
                                carrierCode: "HA",
                            },
                            duration: "PT49M",
                            id: "10",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                        {
                            departure: {
                                iataCode: "KOA",
                                at: "2023-06-20T15:25:00",
                            },
                            arrival: {
                                iataCode: "LAX",
                                terminal: "B",
                                at: "2023-06-20T23:55:00",
                            },
                            carrierCode: "HA",
                            number: "62",
                            aircraft: {
                                code: "321",
                            },
                            operating: {
                                carrierCode: "HA",
                            },
                            duration: "PT5H30M",
                            id: "11",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                    ],
                },
            ],
            price: {
                currency: "USD",
                total: "1140.35",
                base: "725.00",
                fees: [
                    {
                        amount: "0.00",
                        type: "SUPPLIER",
                    },
                    {
                        amount: "0.00",
                        type: "TICKETING",
                    },
                ],
                grandTotal: "1140.35",
            },
            pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
            },
            validatingAirlineCodes: ["HA"],
            travelerPricings: [
                {
                    travelerId: "1",
                    fareOption: "STANDARD",
                    travelerType: "ADULT",
                    price: {
                        currency: "USD",
                        total: "1140.35",
                        base: "725.00",
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "9",
                            cabin: "ECONOMY",
                            fareBasis: "NLXIODMJ",
                            brandedFare: "MN",
                            class: "N",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                        {
                            segmentId: "10",
                            cabin: "ECONOMY",
                            fareBasis: "KHX0ODMN",
                            brandedFare: "MN",
                            class: "K",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                        {
                            segmentId: "11",
                            cabin: "ECONOMY",
                            fareBasis: "KHX0ODMN",
                            brandedFare: "MN",
                            class: "K",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                    ],
                },
            ],
        },
        {
            type: "flight-offer",
            id: "59",
            source: "GDS",
            instantTicketingRequired: false,
            nonHomogeneous: false,
            oneWay: false,
            lastTicketingDate: "2023-06-20",
            numberOfBookableSeats: 9,
            itineraries: [
                {
                    duration: "PT19H35M",
                    segments: [
                        {
                            departure: {
                                iataCode: "NRT",
                                terminal: "2",
                                at: "2023-06-20T14:30:00",
                            },
                            arrival: {
                                iataCode: "TPE",
                                terminal: "2",
                                at: "2023-06-20T17:20:00",
                            },
                            carrierCode: "CI",
                            number: "101",
                            aircraft: {
                                code: "77W",
                            },
                            operating: {
                                carrierCode: "CI",
                            },
                            duration: "PT3H50M",
                            id: "91",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                        {
                            departure: {
                                iataCode: "TPE",
                                terminal: "2",
                                at: "2023-06-20T21:10:00",
                            },
                            arrival: {
                                iataCode: "ONT",
                                terminal: "I",
                                at: "2023-06-20T18:05:00",
                            },
                            carrierCode: "CI",
                            number: "24",
                            aircraft: {
                                code: "77W",
                            },
                            operating: {
                                carrierCode: "CI",
                            },
                            duration: "PT11H55M",
                            id: "92",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                    ],
                },
            ],
            price: {
                currency: "USD",
                total: "1185.65",
                base: "772.00",
                fees: [
                    {
                        amount: "0.00",
                        type: "SUPPLIER",
                    },
                    {
                        amount: "0.00",
                        type: "TICKETING",
                    },
                ],
                grandTotal: "1185.65",
            },
            pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
            },
            validatingAirlineCodes: ["CI"],
            travelerPricings: [
                {
                    travelerId: "1",
                    fareOption: "STANDARD",
                    travelerType: "ADULT",
                    price: {
                        currency: "USD",
                        total: "1185.65",
                        base: "772.00",
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "91",
                            cabin: "ECONOMY",
                            fareBasis: "KLOJN",
                            class: "K",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                        {
                            segmentId: "92",
                            cabin: "ECONOMY",
                            fareBasis: "KLOJN",
                            class: "K",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                    ],
                },
            ],
        },
        {
            type: "flight-offer",
            id: "60",
            source: "GDS",
            instantTicketingRequired: false,
            nonHomogeneous: false,
            oneWay: false,
            lastTicketingDate: "2023-06-20",
            numberOfBookableSeats: 9,
            itineraries: [
                {
                    duration: "PT39H45M",
                    segments: [
                        {
                            departure: {
                                iataCode: "NRT",
                                terminal: "2",
                                at: "2023-06-20T18:20:00",
                            },
                            arrival: {
                                iataCode: "TPE",
                                terminal: "2",
                                at: "2023-06-20T21:10:00",
                            },
                            carrierCode: "CI",
                            number: "105",
                            aircraft: {
                                code: "333",
                            },
                            operating: {
                                carrierCode: "CI",
                            },
                            duration: "PT3H50M",
                            id: "118",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                        {
                            departure: {
                                iataCode: "TPE",
                                terminal: "2",
                                at: "2023-06-21T21:10:00",
                            },
                            arrival: {
                                iataCode: "ONT",
                                terminal: "I",
                                at: "2023-06-21T18:05:00",
                            },
                            carrierCode: "CI",
                            number: "24",
                            aircraft: {
                                code: "77W",
                            },
                            operating: {
                                carrierCode: "CI",
                            },
                            duration: "PT11H55M",
                            id: "119",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                    ],
                },
            ],
            price: {
                currency: "USD",
                total: "1185.65",
                base: "772.00",
                fees: [
                    {
                        amount: "0.00",
                        type: "SUPPLIER",
                    },
                    {
                        amount: "0.00",
                        type: "TICKETING",
                    },
                ],
                grandTotal: "1185.65",
            },
            pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
            },
            validatingAirlineCodes: ["CI"],
            travelerPricings: [
                {
                    travelerId: "1",
                    fareOption: "STANDARD",
                    travelerType: "ADULT",
                    price: {
                        currency: "USD",
                        total: "1185.65",
                        base: "772.00",
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "118",
                            cabin: "ECONOMY",
                            fareBasis: "KLOJN",
                            class: "K",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                        {
                            segmentId: "119",
                            cabin: "ECONOMY",
                            fareBasis: "KLOJN",
                            class: "K",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                    ],
                },
            ],
        },
        {
            type: "flight-offer",
            id: "61",
            source: "GDS",
            instantTicketingRequired: false,
            nonHomogeneous: false,
            oneWay: false,
            lastTicketingDate: "2023-03-18",
            numberOfBookableSeats: 7,
            itineraries: [
                {
                    duration: "PT15H40M",
                    segments: [
                        {
                            departure: {
                                iataCode: "NRT",
                                terminal: "2",
                                at: "2023-06-20T18:30:00",
                            },
                            arrival: {
                                iataCode: "YVR",
                                terminal: "M",
                                at: "2023-06-20T11:35:00",
                            },
                            carrierCode: "WS",
                            number: "5901",
                            aircraft: {
                                code: "76W",
                            },
                            operating: {
                                carrierCode: "JL",
                            },
                            duration: "PT9H5M",
                            id: "100",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                        {
                            departure: {
                                iataCode: "YVR",
                                terminal: "M",
                                at: "2023-06-20T15:10:00",
                            },
                            arrival: {
                                iataCode: "LAX",
                                terminal: "7",
                                at: "2023-06-20T18:10:00",
                            },
                            carrierCode: "UA",
                            number: "387",
                            aircraft: {
                                code: "320",
                            },
                            operating: {
                                carrierCode: "UA",
                            },
                            duration: "PT3H",
                            id: "101",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                    ],
                },
            ],
            price: {
                currency: "USD",
                total: "1643.35",
                base: "1219.00",
                fees: [
                    {
                        amount: "0.00",
                        type: "SUPPLIER",
                    },
                    {
                        amount: "0.00",
                        type: "TICKETING",
                    },
                ],
                grandTotal: "1643.35",
            },
            pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: false,
            },
            validatingAirlineCodes: ["WS"],
            travelerPricings: [
                {
                    travelerId: "1",
                    fareOption: "STANDARD",
                    travelerType: "ADULT",
                    price: {
                        currency: "USD",
                        total: "1643.35",
                        base: "1219.00",
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "100",
                            cabin: "ECONOMY",
                            fareBasis: "TZGJ6AES",
                            class: "T",
                            includedCheckedBags: {
                                quantity: 0,
                            },
                        },
                        {
                            segmentId: "101",
                            cabin: "ECONOMY",
                            fareBasis: "YNA0A1LT",
                            class: "Y",
                            includedCheckedBags: {
                                quantity: 0,
                            },
                        },
                    ],
                },
            ],
        },
        {
            type: "flight-offer",
            id: "62",
            source: "GDS",
            instantTicketingRequired: false,
            nonHomogeneous: false,
            oneWay: false,
            lastTicketingDate: "2023-03-24",
            numberOfBookableSeats: 9,
            itineraries: [
                {
                    duration: "PT10H",
                    segments: [
                        {
                            departure: {
                                iataCode: "NRT",
                                terminal: "1",
                                at: "2023-06-20T17:00:00",
                            },
                            arrival: {
                                iataCode: "LAX",
                                terminal: "B",
                                at: "2023-06-20T11:00:00",
                            },
                            carrierCode: "UA",
                            number: "7946",
                            aircraft: {
                                code: "789",
                            },
                            operating: {
                                carrierCode: "NH",
                            },
                            duration: "PT10H",
                            id: "1",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                    ],
                },
            ],
            price: {
                currency: "USD",
                total: "1904.75",
                base: "1495.00",
                fees: [
                    {
                        amount: "0.00",
                        type: "SUPPLIER",
                    },
                    {
                        amount: "0.00",
                        type: "TICKETING",
                    },
                ],
                grandTotal: "1904.75",
            },
            pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
            },
            validatingAirlineCodes: ["UA"],
            travelerPricings: [
                {
                    travelerId: "1",
                    fareOption: "STANDARD",
                    travelerType: "ADULT",
                    price: {
                        currency: "USD",
                        total: "1904.75",
                        base: "1495.00",
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "1",
                            cabin: "ECONOMY",
                            fareBasis: "ULXNCAPO",
                            brandedFare: "ECONOMY",
                            class: "U",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                    ],
                },
            ],
        },
        {
            type: "flight-offer",
            id: "63",
            source: "GDS",
            instantTicketingRequired: false,
            nonHomogeneous: false,
            oneWay: false,
            lastTicketingDate: "2023-03-24",
            numberOfBookableSeats: 9,
            itineraries: [
                {
                    duration: "PT13H43M",
                    segments: [
                        {
                            departure: {
                                iataCode: "NRT",
                                terminal: "1",
                                at: "2023-06-20T17:00:00",
                            },
                            arrival: {
                                iataCode: "SFO",
                                terminal: "I",
                                at: "2023-06-20T10:35:00",
                            },
                            carrierCode: "UA",
                            number: "7950",
                            aircraft: {
                                code: "789",
                            },
                            operating: {
                                carrierCode: "NH",
                            },
                            duration: "PT9H35M",
                            id: "106",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                        {
                            departure: {
                                iataCode: "SFO",
                                terminal: "3",
                                at: "2023-06-20T13:00:00",
                            },
                            arrival: {
                                iataCode: "LAX",
                                terminal: "7",
                                at: "2023-06-20T14:43:00",
                            },
                            carrierCode: "UA",
                            number: "2166",
                            aircraft: {
                                code: "738",
                            },
                            operating: {
                                carrierCode: "UA",
                            },
                            duration: "PT1H43M",
                            id: "107",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                    ],
                },
            ],
            price: {
                currency: "USD",
                total: "1910.35",
                base: "1495.00",
                fees: [
                    {
                        amount: "0.00",
                        type: "SUPPLIER",
                    },
                    {
                        amount: "0.00",
                        type: "TICKETING",
                    },
                ],
                grandTotal: "1910.35",
            },
            pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
            },
            validatingAirlineCodes: ["UA"],
            travelerPricings: [
                {
                    travelerId: "1",
                    fareOption: "STANDARD",
                    travelerType: "ADULT",
                    price: {
                        currency: "USD",
                        total: "1910.35",
                        base: "1495.00",
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "106",
                            cabin: "ECONOMY",
                            fareBasis: "ULXNCAPO",
                            brandedFare: "ECONOMY",
                            class: "U",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                        {
                            segmentId: "107",
                            cabin: "ECONOMY",
                            fareBasis: "ULXNCAPO",
                            brandedFare: "ECONOMY",
                            class: "U",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                    ],
                },
            ],
        },
        {
            type: "flight-offer",
            id: "64",
            source: "GDS",
            instantTicketingRequired: false,
            nonHomogeneous: false,
            oneWay: false,
            lastTicketingDate: "2023-03-24",
            numberOfBookableSeats: 9,
            itineraries: [
                {
                    duration: "PT10H",
                    segments: [
                        {
                            departure: {
                                iataCode: "NRT",
                                terminal: "1",
                                at: "2023-06-20T17:00:00",
                            },
                            arrival: {
                                iataCode: "LAX",
                                terminal: "B",
                                at: "2023-06-20T11:00:00",
                            },
                            carrierCode: "NH",
                            number: "6",
                            aircraft: {
                                code: "789",
                            },
                            operating: {
                                carrierCode: "NH",
                            },
                            duration: "PT10H",
                            id: "2",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                    ],
                },
            ],
            price: {
                currency: "USD",
                total: "1924.35",
                base: "1495.00",
                fees: [
                    {
                        amount: "0.00",
                        type: "SUPPLIER",
                    },
                    {
                        amount: "0.00",
                        type: "TICKETING",
                    },
                ],
                grandTotal: "1924.35",
            },
            pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
            },
            validatingAirlineCodes: ["NH"],
            travelerPricings: [
                {
                    travelerId: "1",
                    fareOption: "STANDARD",
                    travelerType: "ADULT",
                    price: {
                        currency: "USD",
                        total: "1924.35",
                        base: "1495.00",
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "2",
                            cabin: "ECONOMY",
                            fareBasis: "ULXNCAPO",
                            class: "U",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                    ],
                },
            ],
        },
        {
            type: "flight-offer",
            id: "65",
            source: "GDS",
            instantTicketingRequired: false,
            nonHomogeneous: false,
            oneWay: false,
            lastTicketingDate: "2023-03-18",
            numberOfBookableSeats: 7,
            itineraries: [
                {
                    duration: "PT19H10M",
                    segments: [
                        {
                            departure: {
                                iataCode: "NRT",
                                terminal: "2",
                                at: "2023-06-20T18:30:00",
                            },
                            arrival: {
                                iataCode: "YVR",
                                terminal: "M",
                                at: "2023-06-20T11:35:00",
                            },
                            carrierCode: "WS",
                            number: "5901",
                            aircraft: {
                                code: "76W",
                            },
                            operating: {
                                carrierCode: "JL",
                            },
                            duration: "PT9H5M",
                            id: "29",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                        {
                            departure: {
                                iataCode: "YVR",
                                terminal: "M",
                                at: "2023-06-20T18:35:00",
                            },
                            arrival: {
                                iataCode: "LAX",
                                terminal: "6",
                                at: "2023-06-20T21:40:00",
                            },
                            carrierCode: "UA",
                            number: "8082",
                            aircraft: {
                                code: "7M8",
                            },
                            operating: {
                                carrierCode: "AC",
                            },
                            duration: "PT3H5M",
                            id: "30",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                    ],
                },
            ],
            price: {
                currency: "USD",
                total: "1930.35",
                base: "1506.00",
                fees: [
                    {
                        amount: "0.00",
                        type: "SUPPLIER",
                    },
                    {
                        amount: "0.00",
                        type: "TICKETING",
                    },
                ],
                grandTotal: "1930.35",
            },
            pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: false,
            },
            validatingAirlineCodes: ["UA"],
            travelerPricings: [
                {
                    travelerId: "1",
                    fareOption: "STANDARD",
                    travelerType: "ADULT",
                    price: {
                        currency: "USD",
                        total: "1930.35",
                        base: "1506.00",
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "29",
                            cabin: "ECONOMY",
                            fareBasis: "TZGJ6AES",
                            class: "T",
                            includedCheckedBags: {
                                quantity: 0,
                            },
                        },
                        {
                            segmentId: "30",
                            cabin: "ECONOMY",
                            fareBasis: "YNA0A1LT",
                            class: "Y",
                            includedCheckedBags: {
                                quantity: 0,
                            },
                        },
                    ],
                },
            ],
        },
        {
            type: "flight-offer",
            id: "66",
            source: "GDS",
            instantTicketingRequired: false,
            nonHomogeneous: false,
            oneWay: false,
            lastTicketingDate: "2023-03-24",
            numberOfBookableSeats: 9,
            itineraries: [
                {
                    duration: "PT14H18M",
                    segments: [
                        {
                            departure: {
                                iataCode: "NRT",
                                terminal: "1",
                                at: "2023-06-20T16:35:00",
                            },
                            arrival: {
                                iataCode: "DEN",
                                at: "2023-06-20T12:15:00",
                            },
                            carrierCode: "UA",
                            number: "142",
                            aircraft: {
                                code: "789",
                            },
                            operating: {
                                carrierCode: "UA",
                            },
                            duration: "PT10H40M",
                            id: "45",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                        {
                            departure: {
                                iataCode: "DEN",
                                at: "2023-06-20T13:29:00",
                            },
                            arrival: {
                                iataCode: "LAX",
                                terminal: "7",
                                at: "2023-06-20T14:53:00",
                            },
                            carrierCode: "UA",
                            number: "403",
                            aircraft: {
                                code: "739",
                            },
                            operating: {
                                carrierCode: "UA",
                            },
                            duration: "PT2H24M",
                            id: "46",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                    ],
                },
            ],
            price: {
                currency: "USD",
                total: "1985.35",
                base: "1570.00",
                fees: [
                    {
                        amount: "0.00",
                        type: "SUPPLIER",
                    },
                    {
                        amount: "0.00",
                        type: "TICKETING",
                    },
                ],
                grandTotal: "1985.35",
            },
            pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
            },
            validatingAirlineCodes: ["UA"],
            travelerPricings: [
                {
                    travelerId: "1",
                    fareOption: "STANDARD",
                    travelerType: "ADULT",
                    price: {
                        currency: "USD",
                        total: "1985.35",
                        base: "1570.00",
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "45",
                            cabin: "ECONOMY",
                            fareBasis: "ULXNCAPO",
                            brandedFare: "ECONOMY",
                            class: "U",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                        {
                            segmentId: "46",
                            cabin: "ECONOMY",
                            fareBasis: "ULXNCAPO",
                            brandedFare: "ECONOMY",
                            class: "U",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                    ],
                },
            ],
        },
        {
            type: "flight-offer",
            id: "67",
            source: "GDS",
            instantTicketingRequired: false,
            nonHomogeneous: false,
            oneWay: false,
            lastTicketingDate: "2023-03-24",
            numberOfBookableSeats: 9,
            itineraries: [
                {
                    duration: "PT9H40M",
                    segments: [
                        {
                            departure: {
                                iataCode: "NRT",
                                terminal: "2",
                                at: "2023-06-20T17:20:00",
                            },
                            arrival: {
                                iataCode: "LAX",
                                terminal: "B",
                                at: "2023-06-20T11:00:00",
                            },
                            carrierCode: "JL",
                            number: "62",
                            aircraft: {
                                code: "788",
                            },
                            operating: {
                                carrierCode: "JL",
                            },
                            duration: "PT9H40M",
                            id: "99",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                    ],
                },
            ],
            price: {
                currency: "USD",
                total: "2121.35",
                base: "1708.00",
                fees: [
                    {
                        amount: "0.00",
                        type: "SUPPLIER",
                    },
                    {
                        amount: "0.00",
                        type: "TICKETING",
                    },
                ],
                grandTotal: "2121.35",
            },
            pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
            },
            validatingAirlineCodes: ["JL"],
            travelerPricings: [
                {
                    travelerId: "1",
                    fareOption: "STANDARD",
                    travelerType: "ADULT",
                    price: {
                        currency: "USD",
                        total: "2121.35",
                        base: "1708.00",
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "99",
                            cabin: "ECONOMY",
                            fareBasis: "KNX70ZN4",
                            class: "K",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                    ],
                },
            ],
        },
        {
            type: "flight-offer",
            id: "68",
            source: "GDS",
            instantTicketingRequired: false,
            nonHomogeneous: false,
            oneWay: false,
            lastTicketingDate: "2023-03-20",
            numberOfBookableSeats: 3,
            itineraries: [
                {
                    duration: "PT14H25M",
                    segments: [
                        {
                            departure: {
                                iataCode: "NRT",
                                terminal: "2",
                                at: "2023-06-20T18:30:00",
                            },
                            arrival: {
                                iataCode: "YVR",
                                terminal: "M",
                                at: "2023-06-20T11:35:00",
                            },
                            carrierCode: "WS",
                            number: "5901",
                            aircraft: {
                                code: "76W",
                            },
                            operating: {
                                carrierCode: "JL",
                            },
                            duration: "PT9H5M",
                            id: "61",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                        {
                            departure: {
                                iataCode: "YVR",
                                terminal: "M",
                                at: "2023-06-20T13:42:00",
                            },
                            arrival: {
                                iataCode: "LAX",
                                terminal: "0",
                                at: "2023-06-20T16:55:00",
                            },
                            carrierCode: "AS",
                            number: "4663",
                            aircraft: {
                                code: "319",
                            },
                            operating: {
                                carrierCode: "AA",
                            },
                            duration: "PT3H13M",
                            id: "62",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                    ],
                },
            ],
            price: {
                currency: "USD",
                total: "2305.35",
                base: "1881.00",
                fees: [
                    {
                        amount: "0.00",
                        type: "SUPPLIER",
                    },
                    {
                        amount: "0.00",
                        type: "TICKETING",
                    },
                ],
                grandTotal: "2305.35",
            },
            pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: false,
            },
            validatingAirlineCodes: ["WS"],
            travelerPricings: [
                {
                    travelerId: "1",
                    fareOption: "STANDARD",
                    travelerType: "ADULT",
                    price: {
                        currency: "USD",
                        total: "2305.35",
                        base: "1881.00",
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "61",
                            cabin: "ECONOMY",
                            fareBasis: "TZGJ6AES",
                            class: "T",
                            includedCheckedBags: {
                                quantity: 0,
                            },
                        },
                        {
                            segmentId: "62",
                            cabin: "ECONOMY",
                            fareBasis: "YA2AA",
                            class: "Y",
                            includedCheckedBags: {
                                quantity: 0,
                            },
                        },
                    ],
                },
            ],
        },
        {
            type: "flight-offer",
            id: "69",
            source: "GDS",
            instantTicketingRequired: false,
            nonHomogeneous: false,
            oneWay: false,
            lastTicketingDate: "2023-03-20",
            numberOfBookableSeats: 9,
            itineraries: [
                {
                    duration: "PT32H45M",
                    segments: [
                        {
                            departure: {
                                iataCode: "NRT",
                                terminal: "1",
                                at: "2023-06-20T21:50:00",
                            },
                            arrival: {
                                iataCode: "WAW",
                                at: "2023-06-21T05:40:00",
                            },
                            carrierCode: "LO",
                            number: "80",
                            aircraft: {
                                code: "788",
                            },
                            operating: {
                                carrierCode: "LO",
                            },
                            duration: "PT14H50M",
                            id: "112",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                        {
                            departure: {
                                iataCode: "WAW",
                                at: "2023-06-21T11:10:00",
                            },
                            arrival: {
                                iataCode: "LAX",
                                terminal: "B",
                                at: "2023-06-21T14:35:00",
                            },
                            carrierCode: "LO",
                            number: "21",
                            aircraft: {
                                code: "789",
                            },
                            operating: {
                                carrierCode: "LO",
                            },
                            duration: "PT12H25M",
                            id: "113",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                    ],
                },
            ],
            price: {
                currency: "USD",
                total: "2651.85",
                base: "1915.00",
                fees: [
                    {
                        amount: "0.00",
                        type: "SUPPLIER",
                    },
                    {
                        amount: "0.00",
                        type: "TICKETING",
                    },
                ],
                grandTotal: "2651.85",
                additionalServices: [
                    {
                        amount: "97.20",
                        type: "CHECKED_BAGS",
                    },
                ],
            },
            pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
            },
            validatingAirlineCodes: ["LO"],
            travelerPricings: [
                {
                    travelerId: "1",
                    fareOption: "STANDARD",
                    travelerType: "ADULT",
                    price: {
                        currency: "USD",
                        total: "2651.85",
                        base: "1915.00",
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "112",
                            cabin: "ECONOMY",
                            fareBasis: "MKAFJY00",
                            brandedFare: "ECOSEMIFLX",
                            class: "M",
                            includedCheckedBags: {
                                quantity: 1,
                            },
                        },
                        {
                            segmentId: "113",
                            cabin: "ECONOMY",
                            fareBasis: "HLASEY00",
                            brandedFare: "ECOSEMIFLX",
                            class: "H",
                            includedCheckedBags: {
                                quantity: 1,
                            },
                        },
                    ],
                },
            ],
        },
        {
            type: "flight-offer",
            id: "70",
            source: "GDS",
            instantTicketingRequired: false,
            nonHomogeneous: false,
            oneWay: false,
            lastTicketingDate: "2023-06-20",
            numberOfBookableSeats: 9,
            itineraries: [
                {
                    duration: "PT10H10M",
                    segments: [
                        {
                            departure: {
                                iataCode: "NRT",
                                terminal: "1",
                                at: "2023-06-20T18:40:00",
                            },
                            arrival: {
                                iataCode: "LAX",
                                terminal: "B",
                                at: "2023-06-20T12:50:00",
                            },
                            carrierCode: "SQ",
                            number: "12",
                            aircraft: {
                                code: "77W",
                            },
                            operating: {
                                carrierCode: "SQ",
                            },
                            duration: "PT10H10M",
                            id: "26",
                            numberOfStops: 0,
                            blacklistedInEU: false,
                        },
                    ],
                },
            ],
            price: {
                currency: "USD",
                total: "3193.25",
                base: "3113.00",
                fees: [
                    {
                        amount: "0.00",
                        type: "SUPPLIER",
                    },
                    {
                        amount: "0.00",
                        type: "TICKETING",
                    },
                ],
                grandTotal: "3193.25",
            },
            pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
            },
            validatingAirlineCodes: ["SQ"],
            travelerPricings: [
                {
                    travelerId: "1",
                    fareOption: "STANDARD",
                    travelerType: "ADULT",
                    price: {
                        currency: "USD",
                        total: "3193.25",
                        base: "3113.00",
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "26",
                            cabin: "ECONOMY",
                            fareBasis: "YIFSQ",
                            class: "Y",
                            includedCheckedBags: {
                                quantity: 2,
                            },
                        },
                    ],
                },
            ],
        },
    ];

    const getCarrierName = (code: string): string => {
        const name = (carriers as Record<string, string>)[code];
        return name ?? "Unregistered Airline";
    };

    const toTime = (t: string): string =>
        new Date(t).toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
        });

    const toDuration = (d: string): string =>
        d.slice(2).replace("H", " hr ").replace("M", "min");

    return (
        <StyledScrollView>
            {results.slice(0, 5).map((f, i) => (
                <StyledView
                    key={i}
                    className="w-3/4 mx-auto py-6 border-b-2 border-gray-200"
                >
                    <StyledView className="flex justify-between flex-row w-full">
                        <StyledText className="text-6xl">
                            {f.itineraries[0].segments[0].departure.iataCode}
                        </StyledText>
                        <FontAwesomeIcon
                            icon={faArrowRight}
                            size={40}
                            color="#7F58E8"
                        />
                        <StyledText className="text-6xl">
                            {f.itineraries[0].segments.at(-1)?.arrival.iataCode}
                        </StyledText>
                    </StyledView>
                    <StyledText className="text-4xl text-gray-300">
                        {getCarrierName(f.validatingAirlineCodes[0])}
                    </StyledText>
                    <StyledText className="text-3xl mt-4">
                        {toTime(f.itineraries[0].segments[0].departure.at)} -{" "}
                        {toTime(
                            String(f.itineraries[0].segments.at(-1)?.arrival.at)
                        )}
                    </StyledText>
                    <StyledView className="flex flex-row gap-1">
                        <StyledText className="text-2xl text-gray-300">
                            {toDuration(f.itineraries[0].duration)}
                        </StyledText>
                        <StyledText className="text-2xl text-gray-300">
                            (
                            {f.itineraries[0].segments.length == 1
                                ? String(f.itineraries[0].segments.length) +
                                  " stop"
                                : String(f.itineraries[0].segments.length) +
                                  " stops"}
                            )
                        </StyledText>
                    </StyledView>
                    <StyledView className="flex flex-row justify-between mt-4">
                        <StyledText className="text-4xl">
                            ${f.price.grandTotal}
                        </StyledText>
                        <FontAwesomeIcon
                            icon={faStar}
                            color="#7F58E8"
                            size={32}
                        />
                    </StyledView>
                </StyledView>
            ))}
        </StyledScrollView>
    );
};

export default SearchPage;
