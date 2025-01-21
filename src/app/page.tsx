'use client';

import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function Home() {
	const [message, setMessage] = useState('Click me mf');
	return (
		<div className="w-screen h-screen p-4">
			<Button onClick={() => setMessage('ouch!')}>{message}</Button>
		</div>
	);
}
