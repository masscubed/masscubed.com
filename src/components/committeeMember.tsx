import Image from 'next/image';

interface CommitteeMemberProps {
    name: string;
    role: string;
    bio: string;
    imageUrl?: string;
}

export default function CommitteeMember({name, role, bio, imageUrl}: CommitteeMemberProps) {
    return (
        <div className="committee-member">
            {imageUrl && (
                <div className="profile-image">
                    <Image
                        src={imageUrl}
                        alt={`${name} - ${role}`}
                        width={150}
                        height={150}
                        className="rounded-full"
                    />
                </div>
            )}
            <div className="member-info">
                <b>{role}</b> {name}<br/>
                <p><em>{bio}</em></p>
            </div>
            <br/>
        </div>
    )
}