import Image from 'next/image';

interface CommitteeMemberProps {
    name: string;
    role: string;
    bio: string;
    imageUrl?: string;
}

export default function CommitteeMember({name, role, bio, imageUrl}: CommitteeMemberProps) {
    return (
        <div className="committee-member flex items-start mb-8" style={{ gap: '2.5rem' }}>
            {imageUrl && (
                <div className="profile-image" style={{ flexShrink: 0 }}>
                    <Image
                        src={imageUrl}
                        alt={`${name} - ${role}`}
                        width={150}
                        height={150}
                        className="rounded-full object-cover"
                        style={{ aspectRatio: '1/1' }}
                    />
                </div>
            )}
            <div className="member-info" style={{ flexGrow: 1 }}>
                <b>{role}</b> {name}<br/>
                <p><em>{bio}</em></p>
            </div>
        </div>
    )
}