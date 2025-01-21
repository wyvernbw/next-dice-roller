'use server';

import { db } from '@/db';
import { roomsTable } from '@/db/schema';
import { nanoid } from 'nanoid';

export const getRooms = async () => {
	const rooms = db.select().from(roomsTable).all();
	return rooms;
};

export const createRoom = async () => {
	const room = {
		id: nanoid(),
	};
	await db.insert(roomsTable).values(room);
	console.log('Created room', room);
	return room;
};
