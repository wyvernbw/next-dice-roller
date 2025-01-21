'use client';

import { createRoom } from '@/server';
import { Button } from './ui/button';

export const CreateRoom = () => {
	return <Button onClick={() => createRoom()}>Create Room</Button>;
};
