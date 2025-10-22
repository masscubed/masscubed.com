import Image from 'next/image';

interface CommitteeMemberProps {
    name: string;
    role: string;
    bio: string;
    imageUrl?: string;
}

export default function CommitteeMember({name, role, bio, imageUrl}: CommitteeMemberProps) {
    return (
        <div className="committee-member flex gap-6 items-start mb-8">
            {imageUrl && (
                <div className="profile-image flex-shrink-0">
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
            <div className="member-info flex-grow">
                <b>{role}</b> {name}<br/>
                <p><em>{bio}</em></p>
            </div>
        </div>
    )
}