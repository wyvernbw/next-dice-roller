import { CreateRoom } from '@/components/create-room';
import { Button } from '@/components/ui/button';
import { Room } from '@/db/schema';
import { createRoom, getRooms } from '@/server';

export default async function Home() {
	const rooms = await getRooms();
	return (
		<>
			<RoomList rooms={rooms} />
			<CreateRoom />
		</>
	);
}

const RoomList = ({ rooms }: { rooms: Room[] }) => {
	return (
		<div>
			<h1>Rooms</h1>
			<ul>
				{rooms.map(room => (
					<p key={room.id}>{room.id}</p>
				))}
			</ul>
		</div>
	);
};
