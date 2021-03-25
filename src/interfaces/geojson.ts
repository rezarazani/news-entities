import { Schema } from "mongoose"

type Point = [number, number];
type Polygon = [[[number, number]]]

export type GeoJSON = {
    type: 'Point' | 'Polygon',
    coordinates: Point | Polygon 
}

export const MongoosePolygonSchmea = new Schema({
    type: {
        type: String,
        enum: ['Polygon'],
        required: true
    },
    coordinates: {
        type: [[[Number]]], // Array of arrays of arrays of numbers
        required: true
    }
}, {_id: false});

export const MongoosePointSchmea = new Schema({
    type: {
        type: String,
        enum: ['Point'],
        required: true
    },
    coordinates: {
        type: [Number],
        required: true
    }
}, {_id: false});